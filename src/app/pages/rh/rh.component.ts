import { RoleService } from 'src/app/Service/role.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.scss']
})
export class RHComponent implements OnInit {
  users:any;
  x=localStorage.getItem("acteur")
   y=JSON.parse(this.x).entreprise
   //z=JSON.parse(this.y).id;
  constructor(private roleService:RoleService) { }


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

  ngOnInit(): void {
     if(this.y==null){
       this.findUserByRole();
     }
     else{
   this.findUserByRoleEntreprise();
     }
  }

}
