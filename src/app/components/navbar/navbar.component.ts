import { first } from 'rxjs';
import { Component, OnInit, ElementRef } from '@angular/core';
import { SuperAdmin } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import Swal from "sweetalert2"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  x=localStorage.getItem("acteur");
  y=JSON.parse(this.x).photo;
  name :any;
  public focus;
  public listTitles: any[];
  public location: Location;
  afAuth: any;
  constructor(location: Location,  private element: ElementRef, private router: Router) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = SuperAdmin.filter(listTitle => listTitle);
    this.name=JSON.parse(localStorage.getItem("acteur")).firstName
    console.log(this.name)
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }
  logOut(){
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }
  OnSubmit(){
    Swal.fire({
      title: 'Tu es sure?',
      text: "a déconnecter!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Se déconnecter!',
          'déconnexion a éte confirmée.',
          'success'

        )
        this.logOut();
      }
    })
  }

}
