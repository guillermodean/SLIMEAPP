import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigningComponent } from './components/signing/signing.component';
import { TaskComponent } from './components/task/task.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.modules";
import {AuthGuard} from './auth.guard'


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigningComponent,
    TaskComponent,
    PrivateTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MaterialModule
  ],
  exports:[MaterialModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
