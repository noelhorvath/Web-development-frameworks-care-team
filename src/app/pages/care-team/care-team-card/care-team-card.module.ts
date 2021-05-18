import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareTeamCardComponent } from './care-team-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    CareTeamCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [CareTeamCardComponent]
})
export class CareTeamCardModule { }
