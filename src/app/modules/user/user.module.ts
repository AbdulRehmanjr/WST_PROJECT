import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { UserComponent } from './user.component';
import { SidenavComponent } from '../../components/user/sidenav/sidenav.component';
import { HeaderComponent } from '../../components/user/header/header.component';
import { QuizlistComponent } from '../../components/user/quizlist/quizlist.component';
import { QuizComponent } from '../../components/user/quiz/quiz.component';


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
    SidenavComponent,
    HeaderComponent,
    QuizlistComponent,
    QuizComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class UserModule { }
