import { PointagesService } from './../../Service/pointages.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mode-kiosque',
  templateUrl: './mode-kiosque.component.html',
  styleUrls: ['./mode-kiosque.component.scss']
})
export class ModeKiosqueComponent implements OnInit {
test:any
  x=localStorage.getItem("acteur");
  y=JSON.parse(this.x).entreprise
  idE =this.y
  usersP: any=[];
  usersA: any=[];

  constructor(private http:HttpClient,
    private userService: UserService,
    private pointageService:PointagesService,
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
   pointageKiosque(id:any){
    this.userService.getUserById(id).subscribe(data=>{this.test=data
    });
    Swal.fire({
      title: 'Saisir votre code pin',
      input: 'password',

      customClass: {
        validationMessage: 'my-validation-message'
      },
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage(
            '<i class="fa fa-info-circle"></i> Votre code pin obligatoire'
          )
        }
        if (value==this.test.pinCode){
          this.pointageService.CheakPoinage(this.test.id).subscribe(
            (data) => {
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
                title: 'Pointage avec succès'
              })
            },

          );
          window.location.reload();
        }
      }
    })

    }



}



