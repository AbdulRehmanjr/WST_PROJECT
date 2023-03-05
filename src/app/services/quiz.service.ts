import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private baseUrl = 'http://localhost:8080/api/v1/quiz';
  constructor(private http:HttpClient) { }

  getQuizzes():Observable<any>{
    return this.http.get(`${this.baseUrl}/all`);
  }
  getQuiz(id:number):Observable<any>{

    return this.http.get(`${this.baseUrl}/${id}`);
  }
  addQuiz(quiz:any){
    return this.http.post(`${this.baseUrl}/add-quiz`,quiz);
  }
  deleteQuiz(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  updateQuiz(quiz:any){
    return this.http.put(`${this.baseUrl}/update`,quiz);
  }
  getQuizBycategoryId(id:number):Observable<any>{

    return this.http.get(`${this.baseUrl}/quizBycategory/${id}`);
  }

}
