import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperdashboardComponent } from './superdashboard/superdashboard.component';

const routes: Routes = [
  { path: '', component: SuperdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
