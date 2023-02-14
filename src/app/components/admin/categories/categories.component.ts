import { Component,AfterViewInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


import { Category } from 'src/app/classes/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent{

   categories: Category[] = [
    {id: 1, name: 'History', description: 'Past events and facts'},
    {id: 2, name: 'Geography', description: 'Locations and physical features'},
    {id: 3, name: 'Science', description: 'Nature and technology'},
    {id: 4, name: 'Arts', description: 'Creative forms and expressions'},
    {id: 5, name: 'Sports', description: 'Physical competitions and games'},
  ];
  
  }
  


