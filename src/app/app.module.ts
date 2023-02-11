import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { TeacherComponent } from './modules/teacher/teacher.component';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LandingpageComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatButtonModule,
    NgxTypedJsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
