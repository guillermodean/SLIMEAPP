import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  signUp(user: { email: string; password: string; }) {
    return this.http.post<any>(this.URL + '/signup', user);

  }
  signIn(user: { email: string; password: string }) {
    return this.http.post<any>(this.URL + '/signin', user)
  }
  logdegIn(){
    return !!(localStorage.getItem('token'));

  }
}
