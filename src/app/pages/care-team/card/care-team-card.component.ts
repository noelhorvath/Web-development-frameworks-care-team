import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {CareTeam} from "../../../shared/models/careteam.model";

@Component({
  selector: 'app-care-team-card',
  templateUrl: './care-team-card.component.html',
  styleUrls: ['./care-team-card.component.scss']
})
export class CareTeamCardComponent implements OnInit {
  @Input() careTeam?: CareTeam;
  @Output() getCareTeamId = new EventEmitter<string>();
  alertMsg: any;

  constructor() { }

  ngOnInit(): void {
  }
}
