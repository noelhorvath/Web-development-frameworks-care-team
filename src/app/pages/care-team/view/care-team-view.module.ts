import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareTeamViewComponent } from './care-team-view.component';
import {CareTeamViewRoutingModule} from "./care-team-view-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {CareTeamAddModule} from "../add/care-team-add.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [
    CareTeamViewComponent
  ],
  imports: [
    CommonModule, CareTeamViewRoutingModule, MatCardModule, MatButtonModule, CareTeamAddModule, MatProgressSpinnerModule
  ]
})
export class CareTeamViewModule { }
