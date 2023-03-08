import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { TeacherComponent } from './teacher.component';
import { CategoriesComponent } from 'src/app/components/admin/categories/categories.component';
import { AddCategoryComponent } from '../../components/admin/add-category/add-category.component';
import { AddQuizComponent } from '../../components/admin/add-quiz/add-quiz.component';
import { AddQuestionsComponent } from '../../components/admin/add-questions/add-questions.component';
import { QuizlistComponent } from 'src/app/components/shared/quizlist/quizlist.component';

import { SharedModule } from '../shared/shared.module';

import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {TableModule} from 'primeng/table';
import {FileUploadModule} from 'primeng/fileupload';
import { AdminGuard } from 'src/app/security/admin.guard';
import { WelcomeComponent } from 'src/app/components/shared/welcome/welcome.component';

const routes: Routes = [
  {
    path: 'admin-dashboard', component: TeacherComponent,
    canActivate:[AdminGuard],
    children: [
      {
        path:'',component:WelcomeComponent
      },
      { path: 'categories', component: CategoriesComponent },
      { path: 'add-category', component: AddCategoryComponent },
      { path: 'quizzes', component: QuizlistComponent },
      { path: 'add-quiz', component: AddQuizComponent },
      { path: 'add-question', component: AddQuestionsComponent },
    ]
  },


]

@NgModule({
  declarations: [
    TeacherComponent,
    CategoriesComponent,
    AddCategoryComponent,
    AddQuizComponent,
    AddQuestionsComponent,
  ],
  imports: [
    FormsModule,
    MatSlideToggleModule,
    MatSelectModule,
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
