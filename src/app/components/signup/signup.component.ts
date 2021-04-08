import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { AuthService } from "../../services/auth.service";

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

  constructor(private authservices:AuthService) { }

  ngOnInit(): void {
  }
  signUp(){
    console.log(this.user)
    this.authservices.signUp(this.user)
      .subscribe (
        res=>{
          console.log(res)
          localStorage.setItem('token',res.token)
        },
        err=>{
          console.log(err)
        }
      )
    

  }
}
