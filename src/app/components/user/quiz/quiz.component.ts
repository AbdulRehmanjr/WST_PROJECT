import { Component,OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Quizquestion } from 'src/app/classes/quizquestion'
import { QuestionService } from 'src/app/services/question.service'
import { QuizService } from 'src/app/services/quiz.service'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{

  quizId:number
  questions:Quizquestion[]
  time:number
   constructor(private route:ActivatedRoute
    ,private question_service:QuestionService
    ,private quiz_service:QuizService
    ){

   }
   ngOnInit(): void {
    this.quizId = +this.route.snapshot.paramMap.get('quizId');
    this.fetch_quiz_question()
    this.fetch_quiz_info()
    }

    fetch_quiz_info(){
      this.quiz_service.getQuiz(this.quizId).subscribe({
        next:(data)=>{

          this.time = Number(data.time)

        },
        error:()=>{

        },
        complete:()=>{

        }
      })
    }
  fetch_quiz_question(){
      this.question_service.getQuestionsofQuiz(this.quizId).subscribe({
        next:(data)=>{
          this.questions = data
        },
        error:(error)=>{
          console.log('error in quiz fetching')
        },
        complete:()=>{
          console.log('completed quiz fetching function')
        }
      })
  }
}
