import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class FbBaseService<T extends { id?: string }> {

  constructor(private afs: AngularFirestore) { }

  async create(collectionName: string, data: T, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = this.afs.createId();
    await  this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }
}
