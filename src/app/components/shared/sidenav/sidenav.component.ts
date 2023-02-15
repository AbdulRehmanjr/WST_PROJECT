import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router ,NavigationEnd, NavigationStart} from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{

  @Input()
  view:number
  constructor(private _route:Router){}
  ngOnInit(): void {
    console.log('side nav intialized')
  }

 
  /**
   * navigations
   */
  route_changing():void{
    
    if(this.view==1){
        this._route.navigate(['admin-dashboard'])
    }
    else{
      if(this._route.url ==='/user-dashboard/quiz' ){
        swal.fire({
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
      swal.fire({
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
