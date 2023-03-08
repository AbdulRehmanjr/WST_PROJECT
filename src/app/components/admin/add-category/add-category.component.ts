import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/category.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  addcategoryForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private category_service:CategoryService
    ) { }

  ngOnInit(): void {
    this.addcategoryForm = this.formBuilder.group(
      {
        title: new FormControl('',[Validators.required]),
        description: new FormControl('',[Validators.required]),
      }
    );
  }

  get title():any {return this.addcategoryForm.get('title');}
  get description():any {return this.addcategoryForm.get('description');}

  // form submission
  OnSubmit(){
    console.log('form submission of add new category');

    if(this.addcategoryForm.invalid){
      this.addcategoryForm.markAllAsTouched();
      return;
    }

    let category = new Category();
    category.title = this.addcategoryForm.controls['title'].value;
    category.description = this.addcategoryForm.controls['description'].value;


    this.category_service.addCategory(category).subscribe({
      next:()=>{
        Swal.fire(
                  'Success',
                  'Category added successfully',
                  'success'
        )
      },
      error:(err:Error)=>{
        console.log(err.message)
        Swal.fire(
          'Error',
          'Error adding category',
          'error'
        )
      },
      complete:()=>{
        console.log('add category observable completed')
      }
    })

   }
}
