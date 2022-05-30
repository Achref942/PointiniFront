import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/Service/role.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  users:any;
  x=localStorage.getItem("acteur")
   y=JSON.parse(this.x).entreprise
   //z=JSON.parse(this.y).id;
  constructor(private roleService:RoleService) { }


   findUserByRole(){
       this.roleService.findUserByRole(10).subscribe(
         (resultat:any)=>{
         console.log("resultat : ",resultat)
           this.users=resultat;
           console.log("after resultat : ",this.users)}
           )
   }

   findUserByRoleEntreprise(){
     this.roleService.findUserByRoleEntreprise(10,this.y.id).subscribe(
       (resultat:any)=>{
       console.log("resultat : ",resultat)
         this.users=resultat;
         console.log("after resultat : ",this.users)}
         )
   }

  ngOnInit(): void {
      if(this.y==null){
       this.findUserByRole();
       console.log(this.y)
      }
      else{
  this.findUserByRoleEntreprise();
      }
  }

}
