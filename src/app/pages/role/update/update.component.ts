import { RoleService } from 'src/app/Service/role.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  role: Role = new Role();


  constructor(private roleService: RoleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.roleService.getroleById(this.id).subscribe(data => {
      this.role = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.roleService.Updrole(this.id, this.role).subscribe( data =>{
      this.goToroleList();
    }
    , error => console.log(error));
  }

  goToroleList(){
    this.router.navigate(['/role/list-role']);
  }

}
