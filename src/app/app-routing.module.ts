import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserModule } from './modules/user/user.module';

const routes: Routes = [
  {path:'',component:LandingpageComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'**',component:LandingpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
