import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { SignupService } from 'src/app/services/signup.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{

  SignupForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _router:Router,
    private signupService:SignupService
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

  public OnSubmit() :void{


    if (this.SignupForm.invalid) {
      this.SignupForm.markAllAsTouched();
      return;
    }

    let user = new User();

    user.userName = this.SignupForm.controls['username'].value
    user.email = this.SignupForm.controls['email'].value
    user.userPassword = this.SignupForm.controls['password'].value;
    user.userType = this.SignupForm.controls['role'].value;

    console.log(user)

    this.signupService.signupUser(user).subscribe({
      next:(value:any) =>{
        swal.fire(
          'Success!',
          'User Created Successfully',
          'success'
        );
        this._router.navigate(['login'])
      },
      error(err:Error) {
        swal.fire(
          'Error!',
          `${err.message}`,
          'error'
        );
      },
      complete:()=> {
        console.log('completed')
      },
    })


  }

}
