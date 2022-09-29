import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/service/base.service';
import { Activities } from '../domain/entities/activities.model';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService extends BaseService<Activities> {

  constructor(http: HttpClient) {
    super(http, "/activities");
  }
}
