import { Component, OnInit, OnDestroy } from '@angular/core';
import {FbBaseService} from "../../../services/fb-base.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common';
import {CareTeam} from "../../../shared/models/careteam.model";
import {MatDialog} from "@angular/material/dialog";
import {CareTeamAddComponent} from "../add/care-team-add.component";

@Component({
  selector: 'app-care-team-view',
  templateUrl: './care-team-view.component.html',
  styleUrls: ['./care-team-view.component.scss']
})
export class CareTeamViewComponent implements OnInit, OnDestroy {
  id: any;
  careTeam: any;
  getSubscription: any;
  notFoundMsg: any;
  alertMsg: any;
  collectionName: string = 'CareTeams';

  constructor(private dialog: MatDialog, private route: ActivatedRoute, private fbs: FbBaseService, private router: Router) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if (params?.id) {
      this.id = params.id;
      this.getCareTeam();
    }
  }

  getCareTeam(): void{
    this.getSubscription = this.fbs.getById('CareTeams', this.id).subscribe(
      (data: CareTeam) => {
        if (data === undefined){
          this.notFoundMsg = "No care team found with this id: " + this.id;
        }else{
          this.careTeam = data;
        }
      }, error => {
        console.log(error.message)
      }
    )
  }

  openAddDialogForUpdate(): void {
    const dialogRef = this.dialog.open(CareTeamAddComponent,{
      data: this.careTeam
    });
    dialogRef.afterClosed().subscribe((careTeam: CareTeam) => {
      if (careTeam !== undefined) {
        this.fbs.update(this.collectionName, this.id, careTeam).then(result =>{
          this.alertMsg = "New care team has been successfully updated!";
          console.log(result);
        }).catch(error =>{
          this.alertMsg = "Something went wrong while updating care team!";
          console.warn(error);
        })
      }
    }, error => {
      console.warn(error);
    });
  }

  ngOnDestroy(): void {
    this.getSubscription.unsubscribe();
  }

  navigateBack() {
    this.router.navigateByUrl('home/care-teams')
  }

  deleteCareTeam(): void {
    this.fbs.delete(this.collectionName,this.id).catch(error =>{
      console.log(error.message)
    })
  }
}
