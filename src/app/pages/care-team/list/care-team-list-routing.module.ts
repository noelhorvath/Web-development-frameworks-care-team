import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CareTeamListComponent} from "./care-team-list.component";

const routes: Routes = [
  {
    path: '',
    component: CareTeamListComponent,
    data: {title: 'Care team'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CareTeamListRoutingModule { }
