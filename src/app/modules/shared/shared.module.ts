import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from 'src/app/components/shared/sidenav/sidenav.component';


@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SidenavComponent
  ]
})
export class SharedModule { }
