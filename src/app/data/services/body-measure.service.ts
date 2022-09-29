import { BaseService } from '../../core/service/base.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BodyMeasure } from '../domain/entities/body-measure.model';


@Injectable({
  providedIn: 'root'
})
export class BodyMeasureService extends BaseService<BodyMeasure> {

  constructor(http: HttpClient) {
    super(http, "/body-measure");
  }
}
