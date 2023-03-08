import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/classes/quiz';
import { LoginService } from 'src/app/services/login.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quizlist',
  templateUrl: './quizlist.component.html',
  styleUrls: ['./quizlist.component.css']
})
export class QuizlistComponent implements OnInit {

   user:boolean = false
   quizList: Quiz[]

   constructor(private quiz_service:QuizService,private loginService:LoginService){
   }

  ngOnInit(): void {
    if(this.loginService.getUserRole() =="USER"){
      this.user=true
    }
      this.fetching_all_quiz()
  }

  fetching_all_quiz(){
    this.quiz_service.getQuizzes().subscribe({
      next:(data)=>{
        this.quizList = data
        console.log(data)
      },
      error:(err)=> {
          Swal.fire(
            'Error',
            'Error fetching Quizzes',
            'error'
          )
      },
      complete:()=> {
          console.log('quiz fecthinf functon completed')
      },
    })
  }
}
