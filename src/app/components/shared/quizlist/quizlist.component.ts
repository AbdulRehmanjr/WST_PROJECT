import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/classes/quiz';

@Component({
  selector: 'app-quizlist',
  templateUrl: './quizlist.component.html',
  styleUrls: ['./quizlist.component.css']
})
export class QuizlistComponent implements OnInit {


   quizList: Quiz[] = []

  ngOnInit(): void {

  }

}
