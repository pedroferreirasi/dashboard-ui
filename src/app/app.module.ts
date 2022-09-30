import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './view/pages/task/task-list.component';
import { DashboardComponent } from './view/pages/dashboard/dashboard.component';
import { BodyMesureListComponent } from './view/pages/body-mesure/body-mesure-list.component';
import { MenuComponent } from './view/component/menu/menu.component';
import { FichaMedicaComponent } from './view/component/ficha-medica/ficha-medica.component';
import { BodyWeightListComponent } from './view/pages/body-weight/body-weight-list/body-weight-list.component';
import { FichaMedicaListComponent } from './view/pages/ficha-medica/ficha-medica-list.component';
import { ActivitiesListComponent } from './view/pages/activities/activities-list.component';
import { BodyWeightFormComponent } from './view/pages/body-weight/body-weight-form/body-weight-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    DashboardComponent,
    BodyMesureListComponent,
    MenuComponent,
    FichaMedicaComponent,
    BodyWeightListComponent,
    FichaMedicaListComponent,
    ActivitiesListComponent,
    BodyWeightFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
