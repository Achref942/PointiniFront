import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/Service/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  x=localStorage.getItem("acteur");
  y=JSON.parse(this.x).photo;
  z=JSON.parse(this.x).username;
  id = JSON.parse(this.x).id;
  user: User = new User();

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.userService.UpdUser(this.id, this.user).subscribe( data =>{
      this.goToProfile();
    }
    , error => console.log(error));
  }

  goToProfile(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: "Mis à jour effectuée avec succès",
      showConfirmButton: false,
      timer: 1500
    })
  }
}
