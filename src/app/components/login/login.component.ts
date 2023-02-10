import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/classes/login';
import  swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  //  CurrentUser:any;
    constructor(
      private formBuilder:FormBuilder,
      
      private router:Router
    ) { }
  
    ngOnInit(): void {
      this.LoginForm = this.formBuilder.group({
        username: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required]),
      });
    }
   get username():any {return this.LoginForm.get('username');}
    get password() :any{return this.LoginForm.get('password');}
  
    // form submission
    OnSubmit(){
      console.log("Handling the submit button=> login");
  
  
      if (this.LoginForm.invalid) {
        this.LoginForm.markAllAsTouched();
        return;
      }
  
        let login = new Login();
        login.username = this.LoginForm.controls['username'].value;
        login.password = this.LoginForm.controls['password'].value;
  
        // checking blank 
        if(login.username.trim() == ""){
  
          swal.fire(
            'Error',
            'Username cannot be blank',
            'error'
          );
            return;
        }
        
        console.log("login=>"+login.username+" "+login.password);
        //  api service call
     
}
}
