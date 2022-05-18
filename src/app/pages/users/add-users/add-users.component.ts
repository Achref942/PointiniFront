import { first } from 'rxjs';
import { UserService } from 'src/app/Service/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users';
import Swal from "sweetalert2"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  user: User=new User();
  fileToUpload:Array <File> = [];
  formGroup:FormGroup
  constructor(private UserService:UserService,
  private router: Router,private form:FormBuilder) { }

  ngOnInit(): void {
      this.formGroup=this.form.group({firstName:['',Validators.required],
                                      lastName:['',Validators.required],
                                      email:['',Validators.required],
                                      password:['',Validators.required],
                                      username:['',Validators.required],
                                    adresse:['',Validators.required],
                                  heure_deb:['',Validators.required],
                                })
  }

  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }

  saveUser(){
    let formData = new FormData();
    formData.append("firstName", this.formGroup.value.firstName);
    formData.append("lastName", this.formGroup.value.lastName);
    formData.append("email", this.formGroup.value.email);
    formData.append("password", this.formGroup.value.password);
    formData.append("username", this.formGroup.value.username);
    formData.append("adresse", this.formGroup.value.adresse);
    formData.append("heure_deb", this.formGroup.value.heure_deb);
    formData.append("file", this.fileToUpload[0]);

    this.UserService.AddUser(formData).subscribe(res=>{
      console.log(res);
      this.goToUserList();
      Swal.fire(
        'User!',
        'Ajouté avec succès',
        'success'
      )
    },
    error => console.log(error));
  }
  goToUserList(){
    this.router.navigate(['/users/listeusers']);

  }

  onSubmit(){
    console.log(this.user)
    this.saveUser();

  }
}
