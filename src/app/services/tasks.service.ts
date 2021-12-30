import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private URL= 'http://localhost:3000/api'

  constructor(private http:HttpClient) {  }

  getTasks() {
    return this.http.get<any>(this.URL+'/tasks');
  }

  getPrivateTasks() {
    return this.http.get<any>(this.URL+'/private-tasks');
  }

  postTask(task: { name: string; description: string;date: any }){
    console.log(task)
    return this.http.post<any>(this.URL+'/tasks',task);

  }
  deleteTask(id:any){
    console.log(this.URL+'/tasks/'+id,id)
    return this.http.delete<any>(this.URL+'/tasks/'+id,id)
  }
  editTask(id:any){
    return this.http.put<any>(this.URL+'/tasks',id)
  }
}
