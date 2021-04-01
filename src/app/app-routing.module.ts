import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

//components
import {TaskComponent} from './components/task/task.component'
import {SigningComponent} from './components/signing/signing.component'
import {SignupComponent} from './components/signup/signup.component'
import {PrivateTasksComponent} from './components/private-tasks/private-tasks.component'

const routes: Routes = [
  {
    path:'',
    redirectTo:'task',
    pathMatch:'full'
  },
  {
    path:'task',
    component:TaskComponent
  },
  {
    path:'signin',
    component:SigningComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'private',
    component:PrivateTasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),MatTabsModule],
  exports: [RouterModule,MatTabsModule]
})
export class AppRoutingModule { }
