import { UserService } from 'src/app/Service/users.service';
import { User } from './../../models/users';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
    this.router.navigate(['/users']);
  }
  onSubmit(){
    console.log(this.user)
    this.saveUser();
  }



}
