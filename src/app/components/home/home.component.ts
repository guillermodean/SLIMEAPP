import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards = [
    {
      image: '/assets/uptime-nbg.png',
      text: 'Uptime Kuma',
      link: 'http://192.168.1.72:3001/dashboard/3'
    },
    {
      image: '/assets/HA-nbg.png',
      text: 'Home assistant',
      link: 'http://homeassistant:8123/auth/authorize?response_type=code&redirect_uri=http%3A%2F%2Fhomeassistant%3A8123%2Flovelace%2Fdefault_view%3Fauth_callback%3D1&client_id=http%3A%2F%2Fhomeassistant%3A8123%2F&state=eyJoYXNzVXJsIjoiaHR0cDovL2hvbWVhc3Npc3RhbnQ6ODEyMyIsImNsaWVudElkIjoiaHR0cDovL2hvbWVhc3Npc3RhbnQ6ODEyMy8ifQ%3D%3D'
    },
    {
      image: '/assets/pihole-nbg.png',
      text: 'Pi-hole',
      link: 'http://192.168.1.92/admin/login.php'
    },
    {
      image:'/assets/Router-nbg.png',
      text: 'Router',
      link: 'http://192.168.1.1'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
