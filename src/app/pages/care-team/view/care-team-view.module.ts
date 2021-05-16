import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareTeamViewComponent } from './care-team-view.component';
import {CareTeamViewRoutingModule} from "./care-team-view-routing.module";



@NgModule({
  declarations: [
    CareTeamViewComponent
  ],
  imports: [
    CommonModule, CareTeamViewRoutingModule
  ]
})
export class CareTeamViewModule { }
