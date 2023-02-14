import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { TeacherComponent } from './teacher.component';
import { CategoriesComponent } from '../../components/admin/categories/categories.component';
import { AddCategoryComponent } from '../../components/admin/add-category/add-category.component';
import { AddQuizComponent } from '../../components/admin/add-quiz/add-quiz.component';
import { QuizComponent } from '../../components/admin/quiz/quiz.component';
import { AddQuestionsComponent } from '../../components/admin/add-questions/add-questions.component';
import { QuizlistComponent } from 'src/app/components/user/quizlist/quizlist.component';

import { SharedModule } from '../shared/shared.module';

import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import {TableModule} from 'primeng/table';
import {FileUploadModule} from 'primeng/fileupload';

const routes: Routes = [
  {
    path: 'admin-dashboard', component: TeacherComponent,
    children: [
      { path: 'categories', component: CategoriesComponent },
      { path: 'add-category', component: AddCategoryComponent },
      { path: 'quizzes', component: QuizlistComponent },
      { path: 'add-quiz', component: AddQuizComponent },
      { path: 'add-question/:quizId', component: AddQuestionsComponent },
    ]
  },


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
    TableModule,
    HttpClientModule,
    FileUploadModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [
    RouterModule
  ]
})
export class TeacherModule { }
