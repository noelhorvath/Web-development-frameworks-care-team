import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareTeamViewComponent } from './care-team-view.component';
import {CareTeamViewRoutingModule} from "./care-team-view-routing.module";



@NgModule({
  declarations: [
    CareTeamViewComponent,
    CareTeamViewRoutingModule
  ],
  imports: [
    CommonModule
  ]
})
export class CareTeamViewModule { }
