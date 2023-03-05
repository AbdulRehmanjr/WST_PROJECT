import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../classes/login';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/api/v1'

  constructor(private httpClient: HttpClient) {}



  public generateToken(login: Login) {
    return this.httpClient.post(`${this.baseUrl}` + '/token/generate', login, {
      responseType: 'text',
    });

  }

  public setToken(token: any) {
    if (token != null) {
      sessionStorage.setItem('token', token);
    }
  }

  public getToken() {
    return sessionStorage.getItem('token');
  }

  public getUserRole() {
    let user = JSON.parse(sessionStorage.getItem('user'))

    return user.authority;
  }

  public setUser(data: any) {

    let current_user = new User();

    current_user.email = data.userEmail;
    current_user.userName = data.userName
    current_user.authority = data.roles[0].authority;

    sessionStorage.setItem('user', JSON.stringify(current_user));
  }



  public currentUser(loginInfo:Login) {
    console.log(`login info ${loginInfo.userEmail,loginInfo.password}`)
    return this.httpClient.post(`${this.baseUrl}/token/current-user`,loginInfo);
  }

}
