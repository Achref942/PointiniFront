import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/Service/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-sa',
  templateUrl: './update-sa.component.html',
  styleUrls: ['./update-sa.component.scss']
})
export class UpdateSAComponent implements OnInit {
  id = this.route.snapshot.params['id'];
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
      this.goToUserList();
    }
    , error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/superadmin/listsa']);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: "l'utilisateur est mis à jour",
      showConfirmButton: false,
      timer: 1500
    })
  }
}
