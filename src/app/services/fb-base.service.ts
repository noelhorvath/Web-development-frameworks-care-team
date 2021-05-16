import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from "@angular/fire/firestore";
import {Observable} from "rxjs";
import { CareTeam } from "../shared/models/careteam.model";

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {

  constructor(private afs: AngularFirestore) { }

  async create(collectionName: string, data: CareTeam): Promise<string> {
    const uid = this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  get(collectionName: string): Observable<CareTeam[]> {
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy('period.start','asc');
      return query;
    }).valueChanges() as Observable<CareTeam[]>
  }

  getById(collectionName: string, id: string): Observable<any> {
    return this.afs.collection(collectionName).doc(id).valueChanges();
  }

  async update(collectionName: string, id: string, data: any): Promise<string> {
    await this.afs.collection(collectionName).doc(id).update(data);
    return id;
  }

  async delete(collectionName: string, id: string): Promise<string> {
    await this.afs.collection(collectionName).doc(id).delete();
    return id;
  }
}
