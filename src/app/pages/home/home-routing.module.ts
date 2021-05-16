import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home.component";

const routes: Routes = [
  { path: '', redirectTo: 'care-teams', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' },
    children: [
      {
        path: 'care-teams',
        loadChildren: () => import('./../care-team/list/care-team-list.module').then(m => m.CareTeamListModule)
      },
      {
        path: 'view-care-team',
        loadChildren: () => import('./../care-team/view/care-team-view.module').then(m => m.CareTeamViewModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class HomeRoutingModule { }
