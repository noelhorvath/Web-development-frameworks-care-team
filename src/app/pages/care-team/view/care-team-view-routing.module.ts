import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CareTeamViewComponent} from "./care-team-view.component";

const routes: Routes = [
  {
    path: ':id',
    component: CareTeamViewComponent,
    data: {title: 'Care teams'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CareTeamViewRoutingModule { }
