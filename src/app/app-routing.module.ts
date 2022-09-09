import { TestandoumComponent } from './view/pages/testandoum/testandoum.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './view/pages/task/task-list.component';
import { DashboardComponent } from './view/pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'tasklist', component: TaskListComponent },
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
