import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TeacherComponent } from './teacher.component';

import { SharedModule } from '../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CategoriesComponent } from '../../components/admin/categories/categories.component';
import { AddCategoryComponent } from '../../components/admin/add-category/add-category.component';
import { AddQuizComponent } from '../../components/admin/add-quiz/add-quiz.component';
import { QuizComponent } from '../../components/admin/quiz/quiz.component';
import { AddQuestionsComponent } from '../../components/admin/add-questions/add-questions.component';

const routes:Routes = [
  {
    path:'admin-dashboard',component:TeacherComponent
  }
]

@NgModule({
  declarations: [
    TeacherComponent,
    CategoriesComponent,
    AddCategoryComponent,
    AddQuizComponent,
    QuizComponent,
    AddQuestionsComponent,
  ],
  imports: [
    MatCardModule,
    MatSidenavModule,
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class TeacherModule { }
