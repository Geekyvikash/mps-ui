import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperheaderComponent } from './superheader/superheader.component';
import { SupersidenavComponent } from './supersidenav/supersidenav.component';
import { SuperdashboardComponent } from './superdashboard/superdashboard.component';
import { SuperfooterComponent } from './superfooter/superfooter.component';



@NgModule({
  declarations: [
    SuperheaderComponent,
    SupersidenavComponent,
    SuperdashboardComponent,
    SuperfooterComponent  
  ],
  imports: [
    CommonModule,
  ]
})
export class SuperadminModule { }
