import { Component, OnInit, AfterViewInit } from '@angular/core';
import {CareTeamAddComponent} from "../add/care-team-add.component";
import {CareTeam} from "../../../shared/models/careteam.model";
import {MatDialog} from "@angular/material/dialog";
import {FbBaseService} from "../../../services/fb-base.service";
import {Router} from "@angular/router";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-care-team-list',
  templateUrl: './care-team-list.component.html',
  styleUrls: ['./care-team-list.component.scss']
})
export class CareTeamListComponent implements OnInit, AfterViewInit {
  alertMsg: any;
  collectionName: string = "CareTeams";
  careTeams: Observable<CareTeam[]> | null = null;
  errorMsg: any;

  constructor(private router: Router, private fbs: FbBaseService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getCareTeamsObservable();
  }

  getCareTeamsObservable(): void {
    this.careTeams = this.fbs.get(this.collectionName).pipe(
      catchError(error => {
        this.errorMsg = error.message;
        return throwError(error);
      })
    );
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(CareTeamAddComponent,{});
    dialogRef.afterClosed().subscribe((careTeam: CareTeam) => {
      if(careTeam !== undefined){
        this.fbs.create(this.collectionName,careTeam).then(result =>{
          this.alertMsg = "New care team has been successfully added!";
        }).catch(error =>{
          this.alertMsg = "Something went wrong while adding a new care team!";
          console.warn(error);
        })
      }
    }, error => {
      console.warn(error);
    });
  }

  goToView(event: string) {
    this.router.navigateByUrl('/home/view-care-team/' + event)
  }

  ngAfterViewInit(): void {

  }
}
