import { FormBuilder, FormGroup, Validators,NgForm} from "@angular/forms";
import { Router } from '@angular/router';
import { User } from './../../models/users';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';
import Swal from "sweetalert2"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User=new User;
  formGroup: FormGroup;
  constructor(public loginServise:LoginService,private router:Router  , private form:FormBuilder ) { }

  ngOnInit(): void {

  }

  post() {

//     var password=document.forms["form"]["password"].value;
//     var email=document.forms["form"]["email"].value;
// //email controle
//     if (email == "" || email == null)
//     {
//       Swal.fire(
//         'Mettez une adresse email valide.',
//         'error'
//       )
//         return false;
//     }
//      if (email.indexOf("@", 0) < 0)
//      {
//        Swal.fire(
//          'Mettez une adresse email.',
//          'error'
//        )
//        email.focus();
//          return false;
//      }
//      if (email.indexOf(".", 0) < 0)
//      {
//        Swal.fire(
//          'Mettez une adresse email.',
//          'error'
//        )
//         email.focus();
//          return false;
//      }
// //password controle

//      if (password == "")
//      {
//       Swal.fire(
//         {
//           icon: 'error',
//          title: 'Saisissez votre mot de passe.',

//         }

//       )
//          return false;
//      }

      this.loginServise.Post(this.user).subscribe(data=>{
        console.log("data=",data);

        if (data == null || this.user == null){
          Swal.fire({
            icon: 'error',
           title: 'Mot de passe incorrecte!!!',

          }


          )
          this.router.navigateByUrl("/login");
        }
        else{
          console.log('valider');
          localStorage.setItem("statu","1");
          localStorage.setItem("acteur",JSON.stringify(data));
          this.router.navigateByUrl("/dashboard");

          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
        }
      })
  }

  onSubmit(loginForm:NgForm){
    this.post();
    }

}


