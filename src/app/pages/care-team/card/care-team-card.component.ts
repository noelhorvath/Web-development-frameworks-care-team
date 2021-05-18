import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {CareTeam} from "../../../shared/models/careteam.model";
import {FbBaseService} from "../../../services/fb-base.service";

@Component({
  selector: 'app-care-team-card',
  templateUrl: './care-team-card.component.html',
  styleUrls: ['./care-team-card.component.scss']
})
export class CareTeamCardComponent implements OnInit {
  @Input() careTeam?: CareTeam;
  @Output() getCareTeamId = new EventEmitter<string>();
  collectionName: string = 'CareTeams';
  alertMsg: any;

  constructor(private fbs: FbBaseService) { }

  ngOnInit(): void {
  }

  deleteCareTeam(): void {
    if(this.careTeam !== undefined){
      this.fbs.delete(this.collectionName, <string>this.careTeam.id).then(result =>{
        this.alertMsg = 'Care team has been successfully deleted!'
      }).catch(error =>{
        this.alertMsg = 'There was an error while deleting care team: ' + error.message;
      })
    }

  }
}
