import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent  implements OnInit{
  color: ThemePalette 
  mode: ProgressSpinnerMode
  value:number
  timer:number 
  question :number = 10
  ngOnInit(): void {
    this.timer = 10*2*60
     this.mode = 'determinate'
     this.color = 'primary'
     this.startTimer()
  }
  startTimer(){
    setInterval(()=>{
      this.value = (this.timer/(this.question*2*60))*100
      console.log(`timer ${this.timer} value ${this.value}`)
      if(this.timer<=0){
        console.log('close')
      }else if(this.timer<=50){
        this.color='warn'
      }
      else{
        this.timer--
      }
    },1000) 
  }


  
}
