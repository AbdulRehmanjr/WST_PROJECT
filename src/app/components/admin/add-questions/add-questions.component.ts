import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Quiz } from 'src/app/classes/quiz';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit{
  file: File
  multiple:boolean = true
  maxSize:number = 100000
  quizes:Quiz[]

  selectedValue:string
  constructor(private quiz_service:QuizService,
    private question_service:QuestionService
    ) {}
  ngOnInit(): void {
    this.fetch_quizes()
  }
  onChange(event:any){
    this.file = event.target.files[0];
    console.log(this.file);
  }
  onUpload() {
    const quizId = Number(this.selectedValue)
    this.question_service.addQuestions(this.file,quizId).subscribe({
      next:(response)=>{
        Swal.fire(
          'Success',
          'Questions Added Successfully',
          'success'
        )
      },
      error:(error)=>{
        console.log('error')
        Swal.fire(
          'Error',
          'Error in adding',
          'error'
        )
      },
      complete:()=>{
        console.log('completing the adding question')
      }
    })
  }

  fetch_quizes(){
    this.quiz_service.getQuizzes().subscribe({
      next:(data)=>{
        this.quizes = data
      },
      error:(err)=>{
        console.log('Error in fetching the quizes')
      },
      complete:()=>{
        console.log('completed quiz fetching from add quiz')
      }
    })
  }
}
