import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signing',
  templateUrl: './signing.component.html',
  styleUrls: ['./signing.component.css']
})
export class SigningComponent implements OnInit {
  user={
    email:'',
    password:''
  }
  constructor(private authservice:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  signIn(){
    console.log(this.user)
    this.authservice.signIn(this.user)
    .subscribe(
      res=>{console.log(res);
      localStorage.setItem('token',res.token);
      this.router.navigate(['/private'])
    },
      err=>{console.log(err)
      alert('Contraseña incoreecta')}

    )
  }

}
