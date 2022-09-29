import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/service/base.service';
import { BodyWeight } from '../domain/entities/body-weight.model';

@Injectable({
  providedIn: 'root'
})
export class BodyWeightService extends BaseService<BodyWeight> {

  constructor(http: HttpClient) {
    super(http, "/body-weight")
  }
}
