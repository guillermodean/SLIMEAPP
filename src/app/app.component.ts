import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTabsModule } from "@angular/material/tabs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  navLinks:any[];
  activeLinkIndex=-1;
  constructor(private router: Router){
    this.navLinks=[
      {
        label:'Tasks',
        link:'./task',
        index:0
      },
      {
        label:'Sign up',
        link:'./signup',
        index:1
      },
      {
        label:'Sign in',
        link:'./signin',
        index:2
      }
    ];

  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
