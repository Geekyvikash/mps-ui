import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import {MatIconModule} from '@angular/material/icon';

// import { HeaderComponent } from './dashboard/header/header.component';
// import { FooterComponent } from './dashboard/footer/footer.component';
// import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
