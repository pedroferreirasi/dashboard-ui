import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/service/base.service';
import { MedicalRecord } from '../domain/entities/medical-record.model';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService extends BaseService<MedicalRecord> {

  constructor(http: HttpClient) {
    super(http, "/medical-record")
  }
}
