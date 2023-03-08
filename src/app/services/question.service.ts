import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quizquestion } from '../classes/quizquestion';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private baseUrl = 'http://localhost:8080/api/v1/question';
  constructor(private http:HttpClient) { }
  addQuestions(file:any,quizId:number){
    const formData = new FormData();
    formData.append('file',file);
   if(formData==null || formData == undefined){
     console.log('empty');
   }else{
     console.log(formData.get('file'));
   }
   console.log('done');
    return this.http.post(`${this.baseUrl}/${quizId}/addquestion`,formData,{ responseType: 'text' });
  }

  getQuestionsofQuiz(quizId:Number){
      return this.http.get<Quizquestion[]>(`${this.baseUrl}/quiz/${quizId}`);
  }
}
