import { Component,OnInit} from '@angular/core';
import { Observable } from 'rxjs';



import { Category } from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

   categories: Category[]

    constructor(private category_service:CategoryService){

    }
  ngOnInit(): void {
    this.fetching_categories()
  }

  fetching_categories(){
      this.category_service.getCategoryList().subscribe({
        next:(data)=>{
          this.categories=data
          console.log(data)
        },
        error:(err)=>{
          console.log(err)
          Swal.fire(
            'Error',
            'Error Fetching categories',
            'error'
          )
        },
        complete:()=>{
          console.log('fecthed completed')
        }
      })
  }


  }



