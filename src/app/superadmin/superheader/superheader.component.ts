import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superheader',
  templateUrl: './superheader.component.html',
  styleUrls: ['./superheader.component.css']
})
export class SuperheaderComponent implements OnInit{
  isMenuOpen = false;
  isDropdownOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  constructor(){}

  ngOnInit(): void {
    
  }
}

