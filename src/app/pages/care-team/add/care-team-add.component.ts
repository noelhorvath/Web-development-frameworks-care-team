import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormGroup} from "@angular/forms";
import {getCareTeamForm} from "../../../shared/forms/care-team.form";

@Component({
  selector: 'app-care-team-add',
  templateUrl: './care-team-add.component.html',
  styleUrls: ['./care-team-add.component.scss']
})
export class CareTeamAddComponent implements OnInit {
  form: FormGroup = getCareTeamForm();

  constructor(public dialogRef: MatDialogRef<CareTeamAddComponent>) { }

  ngOnInit(): void {
  }

}
