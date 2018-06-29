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
    taskID: null,
    summary: null
  };
  activeMode = 'ADD'; // ADD | EDIT

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  delete(task: Task): void {
    this.taskService.deleteTask(task).subscribe(_ => {
      this.tasks = this.tasks.filter(t => t.taskID !== task.taskID);
      this.resetMode();
    });
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
    this.activeMode = 'EDIT';
  }

  onTaskAdded(task: Task): void {
    this.tasks.push(task);
    this.activeMode = 'ADD';

    this.resetMode();
  }

  onTaskUpdated(task: Task): void {
    const index = this.tasks.findIndex((t) => t.taskID === task.taskID);

    if (index >= 0 ) {
      this.tasks[index] = task;
      this.resetMode();
    }
  }

  onResetMode(): void {
    this.resetMode();
  }

  resetMode(): void {
    this.selectedTask = {
      taskID: null,
      summary: null
    };

    this.activeMode = 'ADD';
  }

}
