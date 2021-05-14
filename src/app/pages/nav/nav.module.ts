import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [NavComponent]
})
export class NavModule { }
