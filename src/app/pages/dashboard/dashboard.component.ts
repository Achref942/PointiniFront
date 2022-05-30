import { UserService } from './../../Service/users.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PointagesService } from "src/app/Service/pointages.service";
import { userInfo } from 'os';
import { User } from 'src/app/models/users';
import { map, share, Subscription, timer } from 'rxjs';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  time = new Date();
  intervalId;
  subscription: Subscription










  x = localStorage.getItem("acteur");
  y=JSON.parse(this.x).photo;

name:any
user: User=new User();


  ngOnInit() {
     this.name=JSON.parse(localStorage.getItem("acteur")).firstName
  console.log(this.name)
  console.log(JSON.parse(this.x).etat)
  this.getUserById();






  // Using Basic Interval
  this.intervalId = setInterval(() => {
    this.time = new Date();
  }, 1000);

  // Using RxJS Timer
  this.subscription = timer(0, 1000)
    .pipe(
      map(() => new Date()),
      share()
    )
    .subscribe(time => {
      this.time = time;
    });
}



  constructor(
    private pointageService: PointagesService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}
  getUserById(){
    this.userService.getUserById(JSON.parse(this.x).id).subscribe(data => {
      this.user = data;
    }, error => console.log(error));
  }

  toggle = this.user.inOut;
  status = "Cliquer pour Entrer";



  enableDisableRule(icon) {
      this.pointageService.CheakPoinage(JSON.parse(this.x).id).subscribe(
        (data) => {
          this.getUserById();
          this.toggle =! this.toggle;
            this.status = this.toggle ? "Cliquer pour Entrer" : "Cliquer pour Sortir";
          console.log(JSON.parse(this.x).id,data);
        },

      );
  }

}
