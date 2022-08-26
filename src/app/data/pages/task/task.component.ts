import { TodoistService } from '../../services/todoist.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TaskModel } from '../../model/task.model'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  allToDoIst: Observable<TaskModel[]> = new Observable<TaskModel[]>;
  tarefas: TaskModel[] = [];

  constructor(private todoistService: TodoistService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  // Chama o serviço para obtém todos os carros
  loadTasks() {
    this.todoistService.getAllTasks().subscribe((tarefas: TaskModel[]) => {
      this.tarefas = tarefas;
    });
  }
}
