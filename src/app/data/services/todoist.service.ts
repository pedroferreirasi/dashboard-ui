import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { TaskModel } from "../model/task.model";

@Injectable({
  providedIn: 'root'
})
export class TodoistService {

  private url;

  constructor(private http: HttpClient) {
    this.url = 'https://api.todoist.com/rest/v1/tasks';
  }

  httpOptions = {
    headers: new HttpHeaders({"Authorization": "Bearer e79597ab575d629cc9553a515491e022ed52d04f"})
  }

    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };

  getAllTasks(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(this.url, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }

  /*getHeaders(): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Error-Policy', 'ignore');
    const token = 'Bearer e79597ab575d629cc9553a515491e022ed52d04f';
    if (token) {
      headers = headers.append('Authorization', token);
    }
    return headers;
  }

  getAllTasks(): Observable<String {
    return this.http.get<String>(
      this.getApiUrl('https://api.todoist.com/rest/v1/tasks'),
      {
        headers: this.getHeaders()
      }
    );
  }

  getApiUrl(uriSpecific?: string): string {
    const uri: string = uriSpecific || this.apiUri;
    return `${this.getBaseUrl()}${uri}`;
  }

  getBaseUrl(): string {
    return this.dngConfigService.current.baseURL;
  }*/
}
