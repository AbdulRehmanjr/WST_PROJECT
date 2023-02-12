import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  @Input()
  view:number
  constructor(private _active:ActivatedRoute,private _route:Router){}



  home():void{
    
    if(this.view==1){
        this._route.navigate(['admin-dashboard'])
    }
    else{
      if(this._route.url ==='/user-dashboard/quiz'){
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes!'
        }).then((result) => {
          if (result.isConfirmed) {
            this._route.navigate(['user-dashboard'])
          }
        })
      }
      else{
        this._route.navigate(['user-dashboard'])
      }
    }
    
  }
  logout():void{
    if(this._route.url ==='/user-dashboard/quiz'){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.isConfirmed) {
          
          this._route.navigate([''])
        }
      })
    }else{
      this._route.navigate([''])
    }
  }
}
