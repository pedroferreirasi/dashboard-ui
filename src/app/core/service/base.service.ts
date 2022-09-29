import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageableModel } from 'src/app/data/domain/entities/Pageable.model';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  constructor(protected http: HttpClient,
              @Inject(String) private serviceName: string) { }

  public getAPIUrl() : String {
    return "http://192.168.1.24:8060";
  }

  public findAll(): Observable<PageableModel<T>> {
    return this.http.get<PageableModel<T>>(this.getAPIUrl() + this.serviceName);
  }
}
