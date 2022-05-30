import { RoleService } from 'src/app/Service/role.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss']
})
export class SuperAdminComponent implements OnInit {
  users:any;

  constructor(private roleService:RoleService) { }

  findUserByRole(){
    this.roleService.findUserByRole(8).subscribe(
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
