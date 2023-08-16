import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperdashboardComponent } from './superdashboard/superdashboard.component';
import { ApplicantjobsComponent } from './pages/applicantjobs/applicantjobs.component';

const routes: Routes = [
  // { path: 'super', component: SuperdashboardComponent},
  { path: 'applicant', component: ApplicantjobsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
