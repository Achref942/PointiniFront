import { HttpClient } from '@angular/common/http';
import { User } from './../../models/users';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor(private http:HttpClient,private  userService: UserService
    ) { }
  ngOnInit(): void {
    this.getall();
  }
  getall(){
    this.userService.GetAll().subscribe(data=>{this.users=data
      });
  }
}
