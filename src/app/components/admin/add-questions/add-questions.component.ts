import { Component } from '@angular/core';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent {
  uploadedFiles: any[] = [];
  multiple:boolean = true
  maxSize:number = 100000
  constructor() {}

  onUpload(event:any) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }
  }
}
