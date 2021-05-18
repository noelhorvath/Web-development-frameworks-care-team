import { Component, OnInit, OnDestroy } from '@angular/core';
import {FbBaseService} from "../../../services/fb-base.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common';
import {CareTeam} from "../../../shared/models/careteam.model";

@Component({
  selector: 'app-care-team-view',
  templateUrl: './care-team-view.component.html',
  styleUrls: ['./care-team-view.component.scss']
})
export class CareTeamViewComponent implements OnInit, OnDestroy {
  id: any;
  careTeam: any;
  getSubscription: any;
  alertMsg: any;

  constructor(private route: ActivatedRoute, private fbs: FbBaseService, private router: Router) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if (params?.id) {
      this.id = params.id;
      this.getCareTeam();
    }
    console.log(this.id)
  }

  getCareTeam(): void{
    this.getSubscription = this.fbs.getById('CareTeams', this.id).subscribe(
      (data: CareTeam) => {
        this.careTeam = data;
      }, error => {
        this.alertMsg = "No care team found with this id: " + "this.id";
        console.log(error.message)
      }
    )
  }

  ngOnDestroy(): void {
    this.getSubscription.unsubscribe();
  }

  navigateBack() {
    this.router.navigateByUrl('home/care-teams')
  }
}
