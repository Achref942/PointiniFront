import { Entreprise } from './../../models/entreprise';
import { Role } from './../../models/role';
import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/Service/role.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
users:any;
x=localStorage.getItem("acteur");

  constructor(private roleService:RoleService) { }
  findUserByRole(){

      this.roleService.findUserByRole(9).subscribe(
        (resultat:any)=>{
        console.log("resultat : ",resultat)
          this.users=resultat;
          console.log("after resultat : ",this.users)}
          )


  }
  ngOnInit(): void {
    this. findUserByRole();
  }

}
