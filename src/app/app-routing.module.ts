import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { AuthActivation } from './core/guards/auth.guard';
import { AuthDeactivation } from './core/guards/sign.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/cars'
  },
  {
    path: 'cars',
    component: MainComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthDeactivation]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthDeactivation]
  },
  {
    path: 'user-info',
    component: UserInfoComponent,
    canActivate: [AuthActivation]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
