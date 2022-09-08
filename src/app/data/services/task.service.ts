import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from "../../data/domain/entities/task.model";

@Injectable({
  providedIn: 'root'
})
export class TodoistService {

  private url = 'https://api.todoist.com/rest/v1/tasks';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({"Authorization": "Bearer e79597ab575d629cc9553a515491e022ed52d04f"})
  }

  getAllTasks(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(this.url, this.httpOptions);
  }
}
