import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/users.service';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.scss']
})
export class PresenceComponent implements OnInit {

  x=localStorage.getItem("acteur");
  y=JSON.parse(this.x).entreprise
  idE =this.y
  usersP: any=[];
  usersA: any=[];

  constructor(private http:HttpClient,
    private userService: UserService,
    private router:Router) { }
    present(){
      this.userService.Present(this.idE.id).subscribe(data=>{this.usersP=data
        });
    }
    absent(){
      this.userService.absent(this.idE.id).subscribe(data=>{this.usersA=data
        });
    }
  ngOnInit(): void {
this.present();
this.absent();
  }

}
