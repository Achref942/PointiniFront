import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/Service/users.service';

@Component({
  selector: 'app-listeusers',
  templateUrl: './listeusers.component.html',
  styleUrls: ['./listeusers.component.scss']
})
export class ListeusersComponent implements OnInit {

  users: User[];

  constructor(private http:HttpClient,
    private userService: UserService,
    private router:Router) { }
  ngOnInit(): void {
    this.getall();
  }
  getall(){
    this.userService.GetAll().subscribe(data=>{this.users=data
      });
  }

  updUser(id:any){
    this.router.navigate(["/users/updateusers",id]);
  }

}
