import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperheaderComponent } from './superheader/superheader.component';
import { SupersidenavComponent } from './supersidenav/supersidenav.component';
import { SuperdashboardComponent } from './superdashboard/superdashboard.component';
import { SuperfooterComponent } from './superfooter/superfooter.component';
import { ApplicantjobsComponent } from './pages/applicantjobs/applicantjobs.component';
import { RouterModule } from '@angular/router';
import { SuperadminRoutingModule } from './superadmin-routing.module';
import { AdduserComponent } from './pages/adduser/adduser.component';



@NgModule({
  declarations: [
    SuperheaderComponent,
    SupersidenavComponent,
    SuperdashboardComponent,
    SuperfooterComponent,
    ApplicantjobsComponent,
    AdduserComponent  
  ],
  imports: [
    CommonModule,
    SuperadminRoutingModule
    // RouterModule.forChild(SuperdashboardComponent)
  ],
  providers: [],
  bootstrap: [SuperdashboardComponent]
})
export class SuperadminModule { }
