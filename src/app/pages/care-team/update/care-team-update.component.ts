import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {CareTeam} from "../../../shared/models/careteam.model";
import {getCareTeamForm} from "../../../shared/forms/care-team.form";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-care-team-update',
  templateUrl: './care-team-update.component.html',
  styleUrls: ['./care-team-update.component.scss']
})
export class CareTeamUpdateComponent implements OnInit {
  form: FormGroup = getCareTeamForm()

  constructor(public dialogRef: MatDialogRef<CareTeam>) { }

  ngOnInit(): void {
  }

}
