import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component';
import { SuperdashboardComponent } from './superadmin/superdashboard/superdashboard.component';
import { AddroleComponent } from './superadmin/pages/addrole/addrole.component';
import { AdduserComponent } from './superadmin/pages/adduser/adduser.component';


const routes: Routes = [
  {path:'',component:DashboardComponent, loadChildren:()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path:'superadmin',component:SuperdashboardComponent, loadChildren:()=> import('./superadmin/superadmin.module').then(m => m.SuperadminModule)},
  {path:'login',component:LoginComponent},
  {path:'role',component:AddroleComponent}



  {path:'adduser',component:AdduserComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppRoutingModule { }
