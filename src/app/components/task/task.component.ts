import { Component, OnInit } from '@angular/core';
import { TasksService } from "../../services/tasks.service";


export interface TaskDef {
  name: String;
  _id:String;
  description: String;
  date: Date;
}         
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

 
  tasks:any=[]
  displayedColumns: string[] = ['_id','name', 'description', 'date'];

  constructor(private taskService:TasksService) { }

  ngOnInit(): void {
    this.taskService.getTasks()
    .subscribe(
      res=>{
        this.tasks=res;
        console.log(this.tasks)
      },
      err=> console.log(err)
    )
  }

}
