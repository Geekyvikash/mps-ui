import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SuperheaderComponent } from './superheader/superheader.component';
import { SupersidenavComponent } from './supersidenav/supersidenav.component';
import { SuperdashboardComponent } from './superdashboard/superdashboard.component';
import { SuperfooterComponent } from './superfooter/superfooter.component';
import { ApplicantjobsComponent } from './pages/applicantjobs/applicantjobs.component';
import { RouterModule } from '@angular/router';
import { SuperadminRoutingModule } from './superadmin-routing.module';

import {FormsModule} from '@angular/forms';

import { LoginComponent } from '../login/login/login.component';
import { AddroleComponent } from './pages/addrole/addrole.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';




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
    ApplicantjobsComponent,
    // AddroleComponent  
    AdduserComponent  
  ],
  imports: [
    CommonModule,
    SuperadminRoutingModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    NgFor

    // RouterModule.forChild(SuperdashboardComponent)
  ],
  providers: [],
  bootstrap: [SuperdashboardComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SuperadminModule { }
