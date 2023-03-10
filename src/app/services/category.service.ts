import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../classes/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http:HttpClient) { }

  getCategoryList(){
     console.log("getting all data");
    return this.http.get<Category[]>(`${this.baseUrl}`+"/category/all", { responseType: 'json' });
  }

  addCategory(category: Category) {
    console.log("Adding a category");
    return this.http.post(`${this.baseUrl}`+"/category/create", category,{
      responseType:'text'
    });
  }

}
