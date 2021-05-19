import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {getCareTeamForm} from "../../../shared/forms/care-team.form";
import {CareTeam} from "../../../shared/models/careteam.model";
import {Participant} from "../../../shared/models/participant.model";
import {Status} from "../../../shared/models/status.enum";

@Component({
  selector: 'app-care-team-add',
  templateUrl: './care-team-add.component.html',
  styleUrls: ['./care-team-add.component.scss']
})
export class CareTeamAddComponent implements OnInit {
  form: FormGroup = getCareTeamForm();
  btnName: any;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<CareTeamAddComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  getStatusEnumValues(): Array<string>{
    return Object.values(Status);
  }

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

  loadCareTeamIntoForm(): void{
    console.log(this.data);
    if(this.data !== null){
      (<CareTeam> this.data).participant.forEach((par: Participant) =>{
        this.addParticipantFormGroup();
      });
      (<CareTeam> this.data).category?.forEach((cat: string) => {
        this.addCategoryFormControl();
      });
      this.form.patchValue(this.data as CareTeam);
    }
  }

  ngOnInit(): void {
    this.loadCareTeamIntoForm();
    if(this.data === null){
      this.addParticipantFormGroup();
      this.btnName = 'Add';
    }else{
      this.btnName = 'Update';
    }
  }

}
