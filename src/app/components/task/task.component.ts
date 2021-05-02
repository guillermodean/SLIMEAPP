import { Component, OnInit } from '@angular/core';
import { TasksService } from "../../services/tasks.service";


export interface TaskDef {
  name: String;
  _id: String;
  description: String;
  date: Date;
}
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {


  tasks: any = []
  task = {
    _id:'',
    name: '',
    description: '',
    date: ''
  }
  displayedColumns: string[] = ['_id', 'name', 'description', 'date'];

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.getTasks()
      .subscribe(
        res => {
          this.tasks = res;
          console.log(this.tasks)
        },
        err => console.log(err)
      );
  }
  postTask() {
    console.log(this.task);
    this.taskService.postTask(this.task)
    .subscribe(
      res => {
        console.log(res);
        this.ngOnInit()
      },
      err => {
        console.log(err)
        alert('error al introducir tarea')
      }
    )

  }

}
