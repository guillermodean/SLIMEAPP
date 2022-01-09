import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  user={
    email:'',
    password:''
  }

  hide = true;

  constructor(
    private authservices:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }
  signUp(){
    console.log(this.user)
    this.authservices.signUp(this.user)
      .subscribe (
        res=>{
          console.log(res)
          // localStorage.removeItem
          localStorage.setItem('token',res.token)
          this.router.navigate(['/task'])
        },
        err=>{
          console.log(err)
          alert('el usuario ya existe en la aplicación')
        }
      )
    

  }
}
