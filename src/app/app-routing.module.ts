import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/generals/landingpage/landingpage.component';
import { LoginComponent } from './components/generals/login/login.component';
import { SignupComponent } from './components/generals/signup/signup.component';

import { UserModule } from './modules/user/user.module';
import { TeacherModule } from './modules/teacher/teacher.module';


const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: LandingpageComponent }
];

@NgModule({
  declarations:[],
  imports: [
    RouterModule.forRoot(routes),
    UserModule,
    TeacherModule
  ],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
