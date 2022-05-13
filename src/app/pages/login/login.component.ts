import { Router } from '@angular/router';
import { User } from './../../models/users';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  isDirty(): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  user: User=new User;
  constructor(public loginServise:LoginService,private router:Router) { }
  ngOnDestroy(): void {
  }
  ngOnInit(): void {
  }

  post(){
      this.loginServise.Post(this.user).subscribe(data=>{
        console.log("data=",data);

        if (data == null || this.user == null){
console.log("eure de conx fi9 3meeee ");

          this.router.navigateByUrl("/login");
        }
        else{
          console.log('valider');
          localStorage.setItem("statu","1");
          localStorage.setItem("acteur",JSON.stringify(data));
          this.router.navigateByUrl("/dashboard");
        }
      })
  }
  onSubmit(){
    this.post();
    }

}
