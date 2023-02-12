import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from 'src/app/components/shared/sidenav/sidenav.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from 'src/app/components/admin/categories/categories.component';
import { AddCategoryComponent } from 'src/app/components/admin/add-category/add-category.component';
import { QuizComponent } from 'src/app/components/user/quiz/quiz.component';
import { AddQuizComponent } from 'src/app/components/admin/add-quiz/add-quiz.component';
import { AddQuestionsComponent } from 'src/app/components/admin/add-questions/add-questions.component';

const routes:Routes =[
 
]

@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    SidenavComponent,
  ]
})
export class SharedModule { }
