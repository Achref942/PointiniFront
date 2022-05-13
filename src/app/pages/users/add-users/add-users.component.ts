import { UserService } from 'src/app/Service/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  user: User=new User();
  constructor(private UserService:UserService,
  private router: Router) { }

  ngOnInit(): void {
  }
  saveUser(){
    this.UserService.AddUser(this.user).subscribe(data=>{
      console.log(data);
      this.goToUserList();
    },
    error => console.log(error));
  }
  goToUserList(){
    this.router.navigate(['/users/listeusers']);
  }
  onSubmit(){
    console.log(this.user)
    this.saveUser();
  }
}
