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

  private getAPIUrl() : String {
    return "http://192.168.1.24:8060";
  }

  public findAll(): Observable<PageableModel<T>> {
    return this.http.get<PageableModel<T>>(this.getAPIUrl() + this.serviceName);
  }

  public findById(id: number) : Observable<T> {
    return this.http.get<T>(this.getAPIUrl() + this.serviceName + "/" + id)
  }

  public post(entity: T) : Observable<T> {
    return this.http.post<T>(this.getAPIUrl() + this.serviceName, entity);
  }

  public delete(id: number) : Observable<unknown> {
    return this.http.delete(this.getAPIUrl() + this.serviceName + "/" + id);
  }

  public update(id: number, entity: T) : Observable<T> {
    return this.http.put<T>(this.getAPIUrl() + this.serviceName + "/" + id, entity);
  }
}
