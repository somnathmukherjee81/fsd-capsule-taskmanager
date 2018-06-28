import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {
  tasks: Task[];
  selectedTask: Task = {
    taskID: -1,
    summary: null
  };

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

}
