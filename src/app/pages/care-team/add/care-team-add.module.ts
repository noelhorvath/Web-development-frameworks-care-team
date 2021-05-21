import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareTeamAddComponent } from './care-team-add.component';
import { ReactiveFormsModule } from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    CareTeamAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule
  ],
  entryComponents: [CareTeamAddComponent],
  exports: [CareTeamAddComponent]
})
export class CareTeamAddModule { }
