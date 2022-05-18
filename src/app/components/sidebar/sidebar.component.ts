import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const SuperAdmin: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    //{ path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    //{ path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/demmandeconge', title: 'Demmande Conge',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/calondar', title: 'Calondar',  icon:'ni-single-02 text-yellow', class: '' },


    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
   // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    //{ path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: ''  },
    { path: '/users/listeusers', title: 'Users',  icon:'ni-bullet-list-67 text-red', class: ''  },
    { path: '/entreprise/liseentreprise', title: 'Entreprise',  icon:'ni-bullet-list-67 text-red', class: ''  },
    { path: '/pack/listepack', title: 'Pack',  icon:'ni-bullet-list-67 text-red', class: ''  },
    { path: '/jourFerier/liste-jf', title: 'Jours Ferier',  icon:'ni-bullet-list-67 text-red', class: ''  },
    { path: '/role/list-role', title: 'Role ',  icon:'ni-bullet-list-67 text-red', class: ''  },
    { path: '/pointages/list-p', title: 'Pointage ',  icon:'ni-bullet-list-67 text-red', class: ''  },
    { path: '/conges/liste-c', title: 'Conges ',  icon:'ni-bullet-list-67 text-red', class: ''  },
    { path: '/pause', title: 'Pause ',  icon:'ni-bullet-list-67 text-red', class: ''  },
    { path: '/operation', title: 'Operation ',  icon:'ni-bullet-list-67 text-red', class: ''  },
];

export const Admin: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
  //{ path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
  //{ path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
  { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
  { path: '/demmandeconge', title: 'Demmande Conge',  icon:'ni-single-02 text-yellow', class: '' },
  { path: '/calondar', title: 'Calondar',  icon:'ni-single-02 text-yellow', class: '' },
  { path: '/users/listeusers', title: 'Users',  icon:'ni-bullet-list-67 text-red', class: ''  },
  { path: '/pointages/list-p', title: 'Pointage ',  icon:'ni-bullet-list-67 text-red', class: ''  },



  { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
 // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
  //{ path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: ''  },


];
export const RH: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
  //{ path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
  //{ path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
  { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
  { path: '/demmandeconge', title: 'Demmande Conge',  icon:'ni-single-02 text-yellow', class: '' },
  { path: '/calondar', title: 'Calondar',  icon:'ni-single-02 text-yellow', class: '' },
  { path: '/users/listeusers', title: 'Users',  icon:'ni-bullet-list-67 text-red', class: ''  },
  { path: '/pointages/list-p', title: 'Pointage ',  icon:'ni-bullet-list-67 text-red', class: ''  },



  { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
 // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
  //{ path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: ''  },
];
  export const Employee: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    //{ path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    //{ path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/demmandeconge', title: 'Demmande Conge',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/calondar', title: 'Calondar',  icon:'ni-single-02 text-yellow', class: '' },


    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
   // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    //{ path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: ''  },


  ];




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  x=localStorage.getItem("acteur");
    y=JSON.parse(this.x).role
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.y.libelle=="SuperAdmin"){
      alert("SuperAdmin ")
      this.menuItems = SuperAdmin.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;});
    }
    if (this.y.libelle=="Employee"){
      alert("Employee ")
      this.menuItems = Employee.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;});
    }
    if (this.y.libelle=="Admin"){
      alert("Admin ")
      this.menuItems = Admin.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;});
    }
    if (this.y.libelle=="RH"){
      alert("RH ")
      this.menuItems = RH.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;});
    }


//controle


  }


}
