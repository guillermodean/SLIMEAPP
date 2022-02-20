import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { TasksService } from "../../services/tasks.service";
import { WeatherService } from "../../services/weather.service"
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


export interface TaskDef {
  name: String;
  _id: Object;
  description: String;
  date: string;
  actions: string
}
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {


  tasks: any = []
  task = {
    _id: null,
    name: '',
    description: '',
    date: '',
    actions: ''
  }
  weather: any = []
  today:string = ""
  displayedColumns: string[] = ['name', 'description', 'date', 'actions'];

  constructor(private taskService: TasksService, private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    this.today = dd + '/' + mm + '/' + yyyy;

    this.weatherService.getWeather()
      .subscribe(
        res => {
          this.weather = res
        }
      )
    this.taskService.getTasks()
      .subscribe(
        res => {
          this.tasks = res;
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
  deleteTask(task: TaskDef) {
    this.taskService.deleteTask(task._id)
      .subscribe(
        res => {
          console.log(res)
          this.ngOnInit()
        },
        err => {
          console.log(err)
          alert('error al borrar tarea')
        }
      )

    // this.taskService.deleteTask(id)
  }
  editTask(task: TaskDef) {
    console.log(task._id)
  }

}
