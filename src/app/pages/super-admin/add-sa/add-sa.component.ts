import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/Service/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-sa',
  templateUrl: './add-sa.component.html',
  styleUrls: ['./add-sa.component.scss']
})
export class AddSAComponent implements OnInit {
  x = localStorage.getItem("acteur");
  y = JSON.parse(this.x).entreprise;
test:any
  user: User = new User();
  fileToUpload: Array<File> = [];
  formGroup: FormGroup;
  constructor(
    private userService: UserService,
    private router: Router,
    private form: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.form.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      username: ["", Validators.required],
      adresse: ["", Validators.required],
      heure_deb: ["", Validators.required],
    });
    console.log("first test");
  }

  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }

  saveUser() {
    let formData = new FormData();
    formData.append("firstName", this.formGroup.value.firstName);
    formData.append("lastName", this.formGroup.value.lastName);
    formData.append("email", this.formGroup.value.email);
    formData.append("password", this.formGroup.value.password);
    formData.append("username", this.formGroup.value.username);
    formData.append("adresse", this.formGroup.value.adresse);
    formData.append("heure_deb", this.formGroup.value.heure_deb);
    formData.append("file", this.fileToUpload[0]);

    this.userService.AddUser(formData).subscribe(
      (res) => {
        console.log(res);
        this.test=res;
        console.log("test",this.test.id)
        this.userService.addUserRole(
          this.test.id,
          8
        ).subscribe((data)=>{
          this.user = data;
      console.log(data);
      this.goToUserList();
      Swal.fire("User!", "Ajouté avec succès", "success");
        });
      },
      (error) => console.log(error)
    );
  }

  goToUserList() {
    this.router.navigate(["/superadmin/listsa"]);
  }
addRoleToUser(){
  this.userService.addUserRole(
    this.test.id,
    8
  ).subscribe((data)=>{
    this.user = data;
console.log(data);
  });
}
  onSubmit() {
      this.saveUser();
  }
}
