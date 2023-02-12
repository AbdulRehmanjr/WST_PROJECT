import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/classes/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  addcategoryForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    ) { }

  ngOnInit(): void {
    this.addcategoryForm = this.formBuilder.group(
      {
        name: new FormControl('',[Validators.required]),
        description: new FormControl('',[Validators.required]),
      }
    );
  }

  get name():any {return this.addcategoryForm.get('name');}
  get description():any {return this.addcategoryForm.get('description');}

  // form submission
  OnSubmit(){
    console.log('form submission of add new category');

    if(this.addcategoryForm.invalid){
      this.addcategoryForm.markAllAsTouched();
      return;
    }

    let category = new Category();
    category.name = this.addcategoryForm.controls['title'].value;
    category.description = this.addcategoryForm.controls['description'].value;

  //   this.catService.addCategory(category).subscribe(
  //     (data:any)=>{
  //       console.log(data);
  //       swal.fire(
  //         'Success',
  //         'Category added successfully',
  //         'success'
  //       );
  //     },
  //     (error)=>{
  //       console.log(error);
  //       swal.fire(
  //         'Error',
  //         'Something went wrong',
  //         'error'
  //       );
  //     }
      
  //   );
    
   }
}