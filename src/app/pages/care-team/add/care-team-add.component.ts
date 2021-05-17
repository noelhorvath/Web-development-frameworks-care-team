import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {getCareTeamForm} from "../../../shared/forms/care-team.form";

@Component({
  selector: 'app-care-team-add',
  templateUrl: './care-team-add.component.html',
  styleUrls: ['./care-team-add.component.scss']
})
export class CareTeamAddComponent implements OnInit {
  form: FormGroup = getCareTeamForm();

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<CareTeamAddComponent>) {}


  get categories() {
    return this.form.controls["category"] as FormArray;
  }

  get participants() {
    return this.form.controls["participant"] as FormArray;
  }

  addParticipantFormGroup() {
    const participantGroup = this.fb.group({
      member: ['',[Validators.required]],
      onBehalfOf: ['']
    })
    this.participants.push(participantGroup);
  }

  deleteParticipantFormGroup(index: number) {
    this.participants.removeAt(index);
  }

  addCategoryFormControl() {
    const categoryControl = this.fb.control('',[Validators.required])
    this.categories.push(categoryControl);
  }

  deleteCategoryFormControl(index: number) {
    this.categories.removeAt(index);
  }

  ngOnInit(): void {
  }

}
