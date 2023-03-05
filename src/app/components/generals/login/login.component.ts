import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/classes/login';
import { LoginService } from 'src/app/services/login.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  //  CurrentUser:any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService:LoginService
  ) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get email(): any { return this.LoginForm.get('email').value; }
  get password(): any { return this.LoginForm.get('password').value; }

  // form submission
  OnSubmit() {

    if (this.LoginForm.invalid) {
      this.LoginForm.markAllAsTouched();
      return;
    }

    let login = new Login();

    login.userEmail = this.LoginForm.controls['email'].value;
    login.password = this.LoginForm.controls['password'].value;

    // checking blank
    if (login.userEmail.trim() == "") {

      swal.fire(
        'Error',
        'Username cannot be blank',
        'error'
      );
      return
    }

    this.loginService.generateToken(login).subscribe({
      next:(data:any)=>{
        this.loginService.setToken(data.token)

        this.loginService.currentUser(login).subscribe(
          {
            next:(data:any)=>{
              console.log("Data from request",data)
              this.loginService.setUser(data)

            }
            ,error(err) {
                console.log(err)
            },
            complete:() =>{
                console.log('completed seting user')
                this.redirection()
            },
          }

         )
      },
      error:(err)=>{
        console.log(err)
        swal.fire(
          'Login Failed',
          'Please enter valid username and password',
          'error'
        );
      },
      complete:()=>{
        console.log(`completted token generation`)
      }
    })
  }

    private redirection():void {

    const role =  this.loginService.getUserRole()

    if( role== "TEACHER"){

      this.router.navigate(['admin-dashboard'])

    }else if(role == "USER"){

      this.router.navigate(['user-dashboard'])
    }
    else{
      this.router.navigate(['login'])
    }
  }
}
