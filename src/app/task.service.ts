import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './models/task';
import { TASKS } from './models/mock-tasks';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private messageService: MessageService) { }

  getTasks(): Observable<Task[]> {
    this.messageService.add('TaskService: fetched tasks');
    return of(TASKS);
  }
}
