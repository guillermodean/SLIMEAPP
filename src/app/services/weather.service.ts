import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private URI= 'http://localhost:3000/api/weather'

  constructor(private http:HttpClient) { 
   }

  getWeather(){
    return this.http.get(this.URI);
  }
}
