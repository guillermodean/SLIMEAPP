import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authservice: AuthService, private router: Router) {

  }
  canActivate(): boolean {
    if (this.authservice.logdegIn()) {
      return true;
    }
    this.router.navigate(['/signin']);
    return false;

  }
}
