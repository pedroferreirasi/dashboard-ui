import { TodoistService } from '../../../data/services/task.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TaskModel } from '../../../data/domain/entities/task.model'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

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
