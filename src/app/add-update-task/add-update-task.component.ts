import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-add-update-task',
  templateUrl: './add-update-task.component.html',
  styleUrls: ['./add-update-task.component.scss']
})
export class AddUpdateTaskComponent implements OnInit {
  @Input() task: Task = {
    taskId: -1,
    summary: null
  };

  constructor() { }

  ngOnInit() {
  }

}
