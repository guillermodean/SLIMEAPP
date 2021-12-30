import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signing',
  templateUrl: './signing.component.html',
  styleUrls: ['./signing.component.css']
})
export class SigningComponent implements OnInit {
  user = {
    email: '',
    password: ''
  }
  hide = true;
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  signIn() {
    console.log(this.user)
    this.authservice.signIn(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/task'])
            .then(() => {
              window.location.reload();
            });
        },
        err => {
          console.log(err)
          alert('Contraseña incoreecta')
        }

      )
  }

}
