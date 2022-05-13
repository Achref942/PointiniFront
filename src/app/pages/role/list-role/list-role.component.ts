import { Router } from '@angular/router';
import { Role } from './../../../models/role';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoleService } from 'src/app/Service/role.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.scss']
})
export class ListRoleComponent implements OnInit {
  closeResult = '';

  roles:any;

constructor(private roleService:RoleService,
  private router: Router) {
   }


 ngOnInit(): void {
   this.getroles();
 }

 getroles(){
   this.roleService.GetAll().subscribe(
     (resultat:any)=>{
     console.log("resultat : ",resultat)
       this.roles=resultat;
       console.log("after resultat : ",this.roles)}
       )
 }
 updrole(id:any){
  this.router.navigate(["/role/update",id]);
 }


}
