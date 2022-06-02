// import { icon } from '@fortawesome/fontawesome-svg-core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropDownActionKey } from 'igniteui-angular/lib/drop-down/drop-down.common';
import { type } from 'os';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const SuperAdmin: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
   // { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    // { path: '/user-profile', title: 'User profile',  icon:'ni-badge text-blue', class: '' },
    { path:  '/superadmin/listsa', title:'SuperAdmin',icon:'ni-key-25 text-green',class:''},
    { path:  '/admin/listadmin', title:'Admin',icon:'ni-hat-3 text-green',class:''},
    { path:  '/rh/listrh', title:'Ressource Humaine',icon:'ni-single-02 text-green',class:''},
    { path:  '/employee/listemployee', title:'Employee',icon:'ni-satisfied text-green',class:''},
  //  { path: '/tables', title: 'Tables',  icon:'ni-tag', class: '' },
    { path: '/users/listeusers', title: 'Users',  icon:'ni-collection text-blue', class: ''  },
    { path: '/entreprise/liseentreprise', title: 'Entreprise',  icon:'ni-building text-red', class: ''  },
    { path: '/pack/listepack', title: 'Pack',  icon:'ni-books text-red', class: ''  },
    { path: '/demmandeconge', title: 'Demmande Conge',  icon:'ni-user-run text-yellow', class: '' },
    { path: '/calondar', title: 'Calondar',  icon:'ni-calendar-grid-58 text-yellow', class: '' },
    { path: '/conges/liste-c', title: 'Confirmer Conges ',  icon:'ni-check-bold text-yellow', class: ''  },
    { path: '/jourFerier/liste-jf', title: 'Jours Ferier',  icon:'ni-bullet-list-67 text-red', class: ''  },
    { path: '/role/list-role', title: 'Role ',  icon:'ni-diamond text-red', class: ''  },
    { path: '/pointages/list-p', title: 'Pointage ',  icon:'ni-watch-time text-red', class: ''  },
    {path:'/modekiosque',title:'Mode Kiosque',icon:'ni-watch-time text-red', class: ''  },
    { path: '/pause', title: 'Pause ',  icon:'ni-button-pause text-red', class: ''  },
    { path: '/operation', title: 'Operation ',  icon:'ni-money-coins text-red', class: ''  },
    { path:  '/presence', title:'Presence',icon:'ni-bulb-61 text-red',class:''},

    { path:  '/fichedepie', title:'Fiche de Paie',icon:'ni-cloud-download-95 text-blue',class:''},
    { path:  '', title:'Support',icon:'ni-chat-round text-blue',class:''},


];

export const Admin: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
 { path: '/user-profile', title: 'User profile',  icon:'ni-badge text-blue', class: '' },
 { path:  '/presence', title:'Presence',icon:'ni-bulb-61 text-red',class:''},
 { path: '/demmandeconge', title: 'Demmande Conge',  icon:'ni-user-run text-yellow', class: '' },
    { path: '/calondar', title: 'Calondar',  icon:'ni-calendar-grid-58 text-yellow', class: '' },
    { path: '/conges/liste-c', title: 'Confirmer Conges ',  icon:'ni-check-bold text-yellow', class: ''  },
    { path: '/users/listeusers', title: 'Users',  icon:'ni-collection text-blue', class: ''  },
  { path: '/pointages/list-p', title: 'Pointage ',  icon:'ni-watch-time text-red', class: ''  },
  { path:  '', title:'Fiche de Paie',icon:'ni-cloud-download-95 text-blue',class:''},
  { path:  '/rh/listrh', title:'Ressource Humaine',icon:'ni-single-02 text-green',class:''},
  { path:  '/employee/listemployee', title:'Employee',icon:'ni-satisfied text-green',class:''},
  { path:  '', title:'Support',icon:'ni-chat-round text-blue',class:''},
];
export const RH: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
 { path: '/user-profile', title: 'User profile',  icon:'ni-badge text-blue', class: '' },
 { path:  '/presence', title:'Presence',icon:'ni-bulb-61 text-red',class:''},
 { path: '/demmandeconge', title: 'Demmande Conge',  icon:'ni-user-run text-yellow', class: '' },
  { path: '/calondar', title: 'Calondar',  icon:'ni-calendar-grid-58 text-yellow', class: '' },
  { path: '/conges/liste-c', title: 'Confirmer Conges ',  icon:'ni-check-bold text-yellow', class: ''  },
  { path: '/users/listeusers', title: 'Users',  icon:'ni-collection text-blue', class: ''  },
  { path: '/pointages/list-p', title: 'Pointage ',  icon:'ni-watch-time text-red', class: ''  },
  { path:  '', title:'Fiche de Paie',icon:'ni-cloud-download-95 text-blue',class:''},
  { path:  '/employee/listemployee', title:'Employee',icon:'ni-satisfied text-green',class:''},

  { path:  '', title:'Fiche de Paie',icon:'ni-cloud-download-95 text-blue',class:''},
  { path:  '', title:'Support',icon:'ni-chat-round text-blue',class:''},

];
  export const Employee: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-badge text-blue', class: '' },
    { path: '/demmandeconge', title: 'Demmande Conge',  icon:'ni-user-run text-yellow', class: '' },
    { path: '/calondar', title: 'Calondar',  icon:'ni-calendar-grid-58 text-yellow', class: '' },

    { path:  '', title:'Fiche de Paie',icon:'ni-cloud-download-95 text-blue',class:''},
    { path:  '', title:'Support',icon:'ni-chat-round text-blue',class:''},



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
      this.menuItems = SuperAdmin.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;});
    }
    if (this.y.libelle=="Employee"){
      this.menuItems = Employee.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;});
    }
    if (this.y.libelle=="Admin"){
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
