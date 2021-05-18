import { Component, OnInit, OnDestroy } from '@angular/core';
import {CareTeamAddComponent} from "../add/care-team-add.component";
import {CareTeam} from "../../../shared/models/careteam.model";
import {MatDialog} from "@angular/material/dialog";
import {FbBaseService} from "../../../services/fb-base.service";
import {Period} from "../../../shared/models/period.model";
import {Participant} from "../../../shared/models/participant.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-care-team-list',
  templateUrl: './care-team-list.component.html',
  styleUrls: ['./care-team-list.component.scss']
})
export class CareTeamListComponent implements OnInit, OnDestroy {
  alertMsg: any;
  collectionName: string = "CareTeams";
  careTeams: any;
  getSubscription: any;

  constructor(private router: Router, private fbs: FbBaseService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getSubscription = this.fbs.get(this.collectionName).subscribe(
      (data: CareTeam[]) =>{
        this.careTeams = data;
      }, (error: any) =>{
        console.log(error.toString())
      });
  }

  ngOnDestroy(): void {
    this.getSubscription.unsubscribe();
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(CareTeamAddComponent,{});
    const subscription = dialogRef.afterClosed().subscribe((careTeam: CareTeam) => {
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
    subscription.unsubscribe();
  }

  goToView(event: string) {
    this.router.navigateByUrl('/home/view-care-team/' + event)
  }
}
