import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './view/pages/task/task-list.component';
import { DashboardComponent } from './view/pages/dashboard/dashboard.component';
import { BodyMesureListComponent } from './view/pages/body-mesure/body-mesure-list.component';
import { BodyWeightListComponent } from './view/pages/body-weight/body-weight-list.component';
import { ActivitiesListComponent } from './view/pages/activities/activities-list.component';

const routes: Routes = [
  { path: 'tasklist', component: TaskListComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'mesure', component: BodyMesureListComponent },
  { path: 'weight', component: BodyWeightListComponent },
  { path: 'activities', component: ActivitiesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
