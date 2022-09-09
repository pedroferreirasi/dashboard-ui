import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './view/pages/task/task-list.component';
import { TestandoumComponent } from './view/pages/testandoum/testandoum.component';
import { DashboardComponent } from './view/pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TestandoumComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
