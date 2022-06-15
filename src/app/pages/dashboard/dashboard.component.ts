import { UserService } from "./../../Service/users.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PointagesService } from "src/app/Service/pointages.service";
import { userInfo } from "os";
import { User } from "src/app/models/users";
import { map, share, Subscription, timer } from "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  time = new Date();
  intervalId: NodeJS.Timer;
  subscription: Subscription;
  x = localStorage.getItem("acteur");
  y = JSON.parse(this.x).photo;

  z: any;
  name: any;
  user: User = new User();
  toggle: boolean;
  status: string;
  message: string;

  ngOnInit() {
    this.testingDisponibility();
    this.check();
    this.name = JSON.parse(localStorage.getItem("acteur")).firstName;
    //this.z=JSON.parse(JSON.parse(this.x).role).libelle;
    // console.log(this.name);
    //console.log(JSON.parse(this.x).etat);
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
      .subscribe((time) => {
        this.time = time;
      });

    //  this.z = JSON.parse(JSON.parse(this.x).role).libelle;
    //   console.log("test", this.z);
  }

  constructor(
    private pointageService: PointagesService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}
  getUserById() {
    this.userService.getUserById(JSON.parse(this.x).id).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => console.log(error)
    );
  }
  testingDisponibility() {
    this.pointageService
      .findPointageByUserIdEtat(JSON.parse(this.x).id)
      .subscribe((data) => {
        console.log(data);
        if(data == 1){
          this.toggle = true;
          this.status = 'Cliquer pour entre';
          console.log('Non Disponible');
          this.message = 'fa-sign-in-alt';
        }else{
          this.toggle = false;
          this.status = 'Cliquer pour sortir';

          console.log('Disponible');
          this.message = 'fa-sign-out-alt';
        }
      });
  }

  check() {
    this.pointageService
      .findPointageByUserIdEtat(JSON.parse(this.x).id)
      .subscribe((data) => {
        console.log(data);
      });
  }
  enableDisableRule() {
    this.pointageService
      .CheakPoinage(JSON.parse(this.x).id)
      .subscribe((data) => {
        // this.toggle = !this.toggle;
        // console.log("data", data);
        // this.status = this.toggle
        //   ? "Cliquer pour Entrer"
        //   : "Cliquer pour Sortir";
          this.testingDisponibility();
        //   console.log(JSON.parse(this.x).id, data);
      });
  }
}
