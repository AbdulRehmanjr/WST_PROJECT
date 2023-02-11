import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/classes/quiz';

@Component({
  selector: 'app-quizlist',
  templateUrl: './quizlist.component.html',
  styleUrls: ['./quizlist.component.css']
})
export class QuizlistComponent implements OnInit {
   

   quizList: Quiz[] = [
    { id: 1, name: "JavaScript Fundamentals", category: "Programming", numberOfQuestions: 10 },
    { id: 2, name: "Python Mastery", category: "Programming", numberOfQuestions: 15 },
    { id: 3, name: "Ruby on Rails", category: "Programming", numberOfQuestions: 20 },
    { id: 4, name: "C++ Expertise", category: "Programming", numberOfQuestions: 8 },
    { id: 5, name: "Go Programming", category: "Programming", numberOfQuestions: 12 },
    { id: 6, name: "Rust Programming", category: "Programming", numberOfQuestions: 14 }
  ];
  
  ngOnInit(): void {
     
  }

}
