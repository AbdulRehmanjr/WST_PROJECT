import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from '../../components/user/sidenav/sidenav.component';
import { HeaderComponent } from '../../components/user/header/header.component';
import { MainComponent } from '../../components/user/main/main.component'



const routes:Routes = [
  {path:'user-dashboard',component:UserComponent}
]

@NgModule({
  declarations: [
    UserComponent,
    SidenavComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    MatSidenavModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class UserModule { }
