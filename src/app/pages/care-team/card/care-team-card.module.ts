import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareTeamCardComponent } from './care-team-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {OnHoverModule} from "../../../shared/directives/on-hover/on-hover.module";



@NgModule({
  declarations: [
    CareTeamCardComponent
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        OnHoverModule
    ],
  exports: [CareTeamCardComponent]
})
export class CareTeamCardModule { }
