import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareTeamListComponent } from './care-team-list.component';
import {CareTeamListRoutingModule} from "./care-team-list-routing.module";



@NgModule({
  declarations: [
    CareTeamListComponent
  ],
  imports: [
    CommonModule, CareTeamListRoutingModule
  ]
})
export class CareTeamListModule { }
