import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TASKS } from '../models/mock-tasks';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {
  tasks = TASKS;
  selectedTask: Task = {
    taskId: -1,
    summary: null
  };

  constructor() { }

  ngOnInit() {
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

}
