  import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
  import { Router } from '@angular/router'; 

  
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
      link: '/login',
      icon: "far fa-address-card",
      sub_menu: []
      }, 
      {
        link_name: "Profile",
        link: null,
        icon: "fas fa-user-tie",
        sub_menu: [
          {
            link_name: "Add User",
            link: "/applicant",
          }, {
            link_name: "Edit-User",
            link: "/edit",
          }, {
            link_name: "PHP & MySQL",
            link: "/php",
          }
        ]
      },
      {
      link_name: "My Resume",
      link: '/resume',
      icon: "fa fa-file-text-o",
      sub_menu: []
      },
      {
      link_name: "My Applied",
      link: '/applied',
      icon: "fa fa-bullhorn",
      sub_menu: []
      },
      {
      link_name: "Shortlist Jobs",
      link: '/job',
      icon: "fa fa-file-o",
      sub_menu: []
      },
      {
      link_name: "Message",
      link: '/message',
      icon: "far fa-comments",
      sub_menu: []
      },
      {
       link_name: "Meetings",
      link: '/meeting',
      icon: "fas fa-id-card-alt",
      sub_menu: []
      },
      {
        link_name: "Change Password",
       link: '/password',
       icon: "fas fa-lock",
       sub_menu: []
       },
       {
        link_name: "Delete Profile",
       link: '/delete',
       icon: "fas fa-trash",
       sub_menu: []
       },
       {
        link_name: "Logout",
       link: '/logout',
       icon: "fa fa-power-off",
       sub_menu: []
       },
    ]

    

    constructor( private router:Router){}

    ngOnInit(): void {
      
    }
    showSubmenu(itemEl:HTMLElement) {
      itemEl.classList.toggle("showMenu");
    }
    
  }


