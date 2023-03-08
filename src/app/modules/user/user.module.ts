import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { UserComponent } from './user.component';
import { HeaderComponent } from '../../components/user/header/header.component';
import { QuizComponent } from '../../components/user/quiz/quiz.component';
import { QuizlistComponent } from 'src/app/components/shared/quizlist/quizlist.component';
import { TimerComponent } from 'src/app/components/user/timer/timer.component';

import { SharedModule } from '../shared/shared.module';

import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UserGuard } from 'src/app/security/user.guard';
import { WelcomeComponent } from 'src/app/components/shared/welcome/welcome.component';




const routes:Routes = [
  {path:'user-dashboard',component:UserComponent,
    canActivate:[UserGuard],
    children:[
      {
        path:'',component:WelcomeComponent
      },
      {
        path:'quizList',component:QuizlistComponent,
      },{
        path:':quizId/questions',component:QuizComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    QuizComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class UserModule { }
