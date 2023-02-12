import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { UserComponent } from './user.component';
import { HeaderComponent } from '../../components/user/header/header.component';
import { QuizlistComponent } from '../../components/user/quizlist/quizlist.component';
import { QuizComponent } from '../../components/user/quiz/quiz.component';


import { SharedModule } from '../shared/shared.module';

import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';



const routes:Routes = [
  {path:'user-dashboard',component:UserComponent,
    children:[
      {
        path:'',component:QuizlistComponent,
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
    QuizlistComponent,
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
