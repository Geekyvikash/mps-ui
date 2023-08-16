import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-supersidenav',
  templateUrl: './supersidenav.component.html',
  styleUrls: ['./supersidenav.component.css']
})
export class SupersidenavComponent implements OnInit{

  // showSubmenu = false;
  openSidebar: boolean = true;

  menuSidebar = [
    {
      link_name: "User Dashboard",
      link: "/applicant",
      icon: "far fa-address-card",
      sub_menu: []
    }, {
      link_name: "Profile",
      link: null,
      icon: "fas fa-user-tie",
      sub_menu: [
        {
          link_name: "Add User",
          link: "/applicant",
        }, {
          link_name: "Edit-User",
          link: "/javascript",
        }, {
          link_name: "PHP & MySQL",
          link: "/php-n-mysql",
        }
      ]
    }
  ]

   

  constructor(){}

  ngOnInit(): void {
    
  }
  showSubmenu(itemEl:HTMLElement) {
    itemEl.classList.toggle("showMenu");
  }
  
}


