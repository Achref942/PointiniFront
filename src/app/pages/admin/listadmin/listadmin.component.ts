import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/users.service';
import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/Service/role.service';

@Component({
  selector: 'app-listadmin',
  templateUrl: './listadmin.component.html',
  styleUrls: ['./listadmin.component.scss']
})
export class ListadminComponent implements OnInit {
  users:any;
  x=localStorage.getItem("acteur");

    constructor(private roleService:RoleService,
               private userService:UserService,
               private router:Router) { }
    findUserByRole(){

        this.roleService.findUserByRole(9).subscribe(
          (resultat:any)=>{
          console.log("resultat : ",resultat)
            this.users=resultat;
            console.log("after resultat : ",this.users)}
            )


    }
    activer(id:any){
      this.userService.activer(id).subscribe(data=>{
        this.users=data });
    }
    desactiver(id:any){
      this.userService.desactiver(id).subscribe(data=>{
        this.users=data });  }
    updUser(id:any){
      this.router.navigate(["/admin/updateadmin",id]);
    }
    ngOnInit(): void {
      this. findUserByRole();
    }

  }
