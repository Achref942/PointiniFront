import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { RoleService } from 'src/app/Service/role.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  role : Role=new Role();
  constructor(private roleService:RoleService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saverole(){
    this.roleService.addrole(this.role).subscribe(data=>{
      console.log(data);
      this.goToroleList();
    },
    error => console.log(error));
  }
  goToroleList(){
    this.router.navigate(['/role/list-role'])
  }
  onSubmit(){
    console.log(this.role);
    this.saverole();

  }
}
