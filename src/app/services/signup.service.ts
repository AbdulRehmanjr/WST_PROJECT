import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl = 'http://localhost:8080/api/v1/user/'

  constructor(private httpClient: HttpClient) { }

  public signupUser(user:User) {


    return this.httpClient.post(`${this.baseUrl}`+"register", user,{responseType:'text'})
  }
}
