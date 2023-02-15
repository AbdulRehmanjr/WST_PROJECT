import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatCardModule } from '@angular/material/card';

import { SidenavComponent } from 'src/app/components/shared/sidenav/sidenav.component';
import { RouterModule, Routes } from '@angular/router';
import { QuizlistComponent } from '../../components/shared/quizlist/quizlist.component';


const routes:Routes =[
 
]

@NgModule({
  declarations: [SidenavComponent,QuizlistComponent],
  imports: [
    MatCardModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    SidenavComponent,
    QuizlistComponent
  ]
})
export class SharedModule { }
