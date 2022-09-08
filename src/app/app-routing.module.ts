import { TestandoumComponent } from './view/pages/testandoum/testandoum.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './view/pages/task/task.component';

const routes: Routes = [
  { path: 'task', component: TaskComponent,  },
  { path: 'testando', component: TestandoumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
