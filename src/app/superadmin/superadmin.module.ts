import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperheaderComponent } from './superheader/superheader.component';
import { SupersidenavComponent } from './supersidenav/supersidenav.component';
import { SuperdashboardComponent } from './superdashboard/superdashboard.component';
import { SuperfooterComponent } from './superfooter/superfooter.component';
import { ApplicantjobsComponent } from './pages/applicantjobs/applicantjobs.component';
import { RouterModule } from '@angular/router';
import { SuperadminRoutingModule } from './superadmin-routing.module';
import {FormsModule} from '@angular/forms';

import { LoginComponent } from '../login/login/login.component';



@NgModule({
  declarations: [
    SuperheaderComponent,
    SupersidenavComponent,
    SuperdashboardComponent,
    SuperfooterComponent,
    ApplicantjobsComponent , 
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SuperadminRoutingModule
    // RouterModule.forChild(SuperdashboardComponent)
  ],
  providers: [],
  bootstrap: [SuperdashboardComponent]
})
export class SuperadminModule { }
