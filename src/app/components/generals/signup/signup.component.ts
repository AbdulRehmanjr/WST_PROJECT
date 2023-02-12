import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/classes/login';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  SignupForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.SignupForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email :new FormControl('',[Validators.required,Validators.email]),
      role : new FormControl('',[Validators.required])
    });
  }
  get role():any {return this.SignupForm.get('role').value}
  get email():any {return this.SignupForm.get('email').value}
  get username(): any { return this.SignupForm.get('username').value; }
  get password(): any { return this.SignupForm.get('password').value; }

  // form submission
  OnSubmit() {
    console.log("Handling the submit button=> login");

    if (this.SignupForm.invalid) {
      this.SignupForm.markAllAsTouched();
      return;
    }

    let login = new Login();
    login.username = this.username()
    login.password = this.password()

    // checking blank 
    if (login.username.trim() == "") {

      Swal.fire(
        'Error',
        'Username cannot be blank',
        'error'
      );
      return;
    }

    console.log("login=>" + login.username + " " + login.password);
    //  api service call

  }
}
interface Singup {
  name:string
  password:string
  email:string
  role:string 
}