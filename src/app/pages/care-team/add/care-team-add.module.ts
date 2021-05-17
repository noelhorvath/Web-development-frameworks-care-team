import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareTeamAddComponent } from './care-team-add.component';
import { ReactiveFormsModule } from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";



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
    MatInputModule
  ],
  entryComponents: [CareTeamAddComponent],
  exports: [CareTeamAddComponent]
})
export class CareTeamAddModule { }
