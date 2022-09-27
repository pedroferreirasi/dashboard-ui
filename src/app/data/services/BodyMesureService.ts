import { BaseService } from './../../core/service/base.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BodyMesure } from '../domain/entities/body-mesure';


@Injectable({
  providedIn: 'root'
})
export class BodyMesureService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
   }

  findAll(): Observable<BodyMesure[]> {
    return this.http.get<BodyMesure[]>(this.getAPIUrl() + "/body-mesure");
  }
}
