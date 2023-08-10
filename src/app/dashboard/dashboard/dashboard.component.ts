import { Component, OnInit } from '@angular/core';
// import '~@fortawesome/fontawesome-free/css/all.css';
import * as AOS from 'aos';
// import 'aos/dist/aos.css';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    AOS.init();
  }
}
