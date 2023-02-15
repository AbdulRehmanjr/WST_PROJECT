import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { UserComponent } from './user.component';
import { HeaderComponent } from '../../components/user/header/header.component';
import { QuizComponent } from '../../components/user/quiz/quiz.component';


import { SharedModule } from '../shared/shared.module';

import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { QuizlistComponent } from 'src/app/components/shared/quizlist/quizlist.component';




const routes:Routes = [
  {path:'user-dashboard',component:UserComponent,
    children:[
      {
        path:'quizList',component:QuizlistComponent,
      },{
        path:'quiz',component:QuizComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    QuizComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class UserModule { }
