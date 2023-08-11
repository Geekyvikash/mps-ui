import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component';
import { SuperdashboardComponent } from './superadmin/superdashboard/superdashboard.component';

const routes: Routes = [
  {path:'',component:DashboardComponent, loadChildren:()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path:'superadmin',component:SuperdashboardComponent, loadChildren:()=> import('./superadmin/superadmin.module').then(m => m.SuperadminModule)},
  {path:'login',component:LoginComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
