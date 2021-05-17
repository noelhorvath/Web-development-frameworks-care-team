import { Component, OnInit } from '@angular/core';
import {CareTeamAddComponent} from "../add/care-team-add.component";
import {CareTeam} from "../../../shared/models/careteam.model";
import {MatDialog} from "@angular/material/dialog";
import {FbBaseService} from "../../../services/fb-base.service";

@Component({
  selector: 'app-care-team-list',
  templateUrl: './care-team-list.component.html',
  styleUrls: ['./care-team-list.component.scss']
})
export class CareTeamListComponent implements OnInit {
  alertMsg: any;
  collectionName: string = "CareTeams";
  constructor(private fbs: FbBaseService, private dialog: MatDialog) {}

  ngOnInit(): void {
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

}
