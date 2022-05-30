import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/Service/users.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-listeusers',
  templateUrl: './listeusers.component.html',
  styleUrls: ['./listeusers.component.scss']
})
export class ListeusersComponent implements OnInit {


  x=localStorage.getItem("acteur");
  z=JSON.parse(this.x).role
  y=JSON.parse(this.x).entreprise
  idE =this.y
  users: any=[];

  constructor(private http:HttpClient,
    private userService: UserService,
    private router:Router) { }
  ngOnInit(): void {

      if(this.z.libelle=="SuperAdmin")
      {
        console.log("test first")
        this.getall()
      }
      else
     {
      console.log(this.idE)
      this.userService.getByEntreprise(this.idE.id).subscribe(data=>{
       this.users=data
      });
      }
  }
  getall(){
    this.userService.GetAll().subscribe(data=>{this.users=data
      });
  }

  activer(id:any){
    this.userService.activer(id).subscribe(data=>{
      this.users=data });
  }
  desactiver(id:any){
    this.userService.desactiver(id).subscribe(data=>{
      this.users=data });  }
  updUser(id:any){
    this.router.navigate(["/users/updateusers",id]);
  }

}


