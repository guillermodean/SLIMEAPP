import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router, public authservice: AuthService) {
    this.navLinks = []
  }
  ngOnInit(): void {

    if (this.authservice.logdegIn()) {
      console.log('navlinks ' + this.navLinks)
      this.navLinks = [
        {
          label: 'Sign in',
          link: './signin',
          index: 0
        },
        {
          label: 'Sign up',
          link: './signup',
          index: 1
        },
        {
          label: 'Tasks',
          link: './task',
          index: 2
        }
      ];
      this.ngOnInit
    } else {
      console.log('navlinks ' + this.navLinks)
      this.navLinks = [
        {
          label: 'Sign in',
          link: './signin',
          index: 0
        }
      ];
      this.ngOnInit
    }

    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });

  }
}
