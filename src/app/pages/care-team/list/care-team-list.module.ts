import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareTeamListComponent } from './care-team-list.component';
import {CareTeamListRoutingModule} from "./care-team-list-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {CareTeamAddModule} from "../add/care-team-add.module";
import {MatCardModule} from "@angular/material/card";
import {CareTeamCardModule} from "../card/care-team-card.module";



@NgModule({
  declarations: [
    CareTeamListComponent
  ],
  imports: [
    CommonModule, CareTeamListRoutingModule, MatButtonModule, CareTeamAddModule, MatCardModule, CareTeamCardModule
  ]
})
export class CareTeamListModule { }
