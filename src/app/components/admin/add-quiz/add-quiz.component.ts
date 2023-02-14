import { Component } from '@angular/core';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent {
  uploadedFiles: any[] = [];
  multiple:boolean = false
  maxSize:number = 100000
  constructor() {}

  onUpload(event:any) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }
  }

}
