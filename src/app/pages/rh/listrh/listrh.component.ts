import { UserService } from 'src/app/Service/users.service';
import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/Service/role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listrh',
  templateUrl: './listrh.component.html',
  styleUrls: ['./listrh.component.scss']
})
export class ListrhComponent implements OnInit {
  users:any;
  x=localStorage.getItem("acteur")
   y=JSON.parse(this.x).entreprise

   //z=JSON.parse(this.y).id;
  constructor(private roleService:RoleService,private userService:UserService,private router:Router) { }


   findUserByRole(){
       this.roleService.findUserByRole(12).subscribe(
         (resultat:any)=>{
         console.log("resultat : ",resultat)
           this.users=resultat;
           console.log("after resultat : ",this.users)}
           )
   }

   findUserByRoleEntreprise(){
     this.roleService.findUserByRoleEntreprise(12,this.y.id).subscribe(
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
     if(this.y==null){
       this.findUserByRole();
     }
     else{
   this.findUserByRoleEntreprise();
     }
  }

  prime(id:any){
    this.router.navigate(["/operation/add-prime-one",id]);
  }
  penalite(id:any){
    this.router.navigate(["/operation/add-penalite-one",id]);
  }

}

