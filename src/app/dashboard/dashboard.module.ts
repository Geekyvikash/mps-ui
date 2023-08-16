import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    DashboardComponent,
    FooterComponent,
    HeaderComponent

    
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    NgFor,
    MatStepperModule
  ]
})
export class DashboardModule { }
