import { UserService } from 'src/app/Service/users.service';
import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/Service/role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-sa',
  templateUrl: './list-sa.component.html',
  styleUrls: ['./list-sa.component.scss']
})
export class ListSAComponent implements OnInit {
  users:any;

  constructor(private roleService:RoleService,
    private userService:UserService,
    private router:Router) { }

  findUserByRole(){
    this.roleService.findUserByRole(8).subscribe(
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
    this.router.navigate(["/superadmin/updatesa",id]);
  }
  ngOnInit(): void {
this. findUserByRole();
  }

}
