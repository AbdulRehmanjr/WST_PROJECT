import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/classes/category';
import { Quiz } from 'src/app/classes/quiz';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

import swal from 'sweetalert2';
@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  addquizForm:FormGroup;
  categories:Category[];
  constructor(private formBuilder:FormBuilder,
    private quizService:QuizService,
    private categoryService:CategoryService
    ) { }

  ngOnInit(): void {
    this.addquizForm = this.formBuilder.group({
      title: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      category: new FormControl('',[Validators.required]),
      totalmarks: new FormControl('',[Validators.required]),
      questions: new FormControl('',[Validators.required]),
      timer: new FormControl('',[Validators.required]),
      active: new FormControl(false),
    });
    this.categoryService.getCategoryList().subscribe({
      next:(data:Category[])=>{
        this.categories = data

      },
      error:(err)=>{
        console.log('error')
      },
      complete:()=>{
        console.log('list fetched successfully')
      }

    }
    );

  }
  get title():any {return this.addquizForm.get('title');}
  get description():any {return this.addquizForm.get('description');}
  get category():any {return this.addquizForm.get('category');}
  get totalmarks():any {return this.addquizForm.get('totalmarks');}
  get questions():any {return this.addquizForm.get('questions');}
  get timer():any {return this.addquizForm.get('timer');}
  get active():any {return this.addquizForm.get('active');}

  OnSubmit(){
    console.log('form submission of add new quiz');
    //if form is invalid
    if(this.addquizForm.invalid){
      this.addquizForm.markAllAsTouched();
      return;
    }
    // quizs
    let quiz = new Quiz();
    let cat = new Category();

    cat.id = this.category.value;

    quiz.title = this.addquizForm.controls['title'].value;
    quiz.description = this.addquizForm.controls['description'].value;
     quiz.category = cat;
    quiz.totalMarks = this.addquizForm.controls['totalmarks'].value;
    quiz.numberOfQuestions = this.addquizForm.controls['questions'].value;
    quiz.time = this.addquizForm.controls['timer'].value
    quiz.active = this.addquizForm.controls['active'].value;

    console.log(quiz);
    this.quizService.addQuiz(quiz).subscribe(
      data=>{
        console.log(data);
        swal.fire('Sucess!!!!',
        'Quiz added successfully',
        'success');
        this.addquizForm.reset();
        this.addquizForm.markAllAsTouched();
      },error=>{
        console.log(error);
        swal.fire('Error!!!!',
        'Quiz not added',
        'error');
      }
    );
  }
}
