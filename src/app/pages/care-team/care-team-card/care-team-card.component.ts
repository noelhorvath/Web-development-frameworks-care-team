import {Component, Input, OnInit} from '@angular/core';
import {CareTeam} from "../../../shared/models/careteam.model";

@Component({
  selector: 'app-care-team-card',
  templateUrl: './care-team-card.component.html',
  styleUrls: ['./care-team-card.component.scss']
})
export class CareTeamCardComponent implements OnInit {
  @Input() careTeam?: CareTeam;

  constructor() { }

  ngOnInit(): void {
  }

}
