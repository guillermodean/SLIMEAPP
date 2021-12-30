import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//components
import {TaskComponent} from './components/task/task.component'
import {SigningComponent} from './components/signing/signing.component'
import {SignupComponent} from './components/signup/signup.component'
import {PrivateTasksComponent} from './components/private-tasks/private-tasks.component'
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path:'',
    redirectTo:'signin',
    pathMatch:'full'
  },
  {
    path:'task',
    component:TaskComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'signin',
    component:SigningComponent
  },
  {
    path:'signup',
    component:SignupComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'private',
    component:PrivateTasksComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
