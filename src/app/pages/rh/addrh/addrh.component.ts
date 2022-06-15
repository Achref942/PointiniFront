import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/Service/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addrh',
  templateUrl: './addrh.component.html',
  styleUrls: ['./addrh.component.scss']
})
export class AddrhComponent implements OnInit {
  x = localStorage.getItem("acteur");
  y = JSON.parse(this.x).entreprise;
test:any
test2:any
  user: User = new User();
  fileToUpload: Array<File> = [];
  formGroup: FormGroup;
  submitted: boolean;
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
  addRoleToUser() {
    this.userService.addUserRole(this.test2.id,12).subscribe((data) => {
      this.user = data;
      console.log(data);
    });
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
        this.test = res;
        console.log("user id", this.test.id);
        console.log("entreprise ",this.y);
        console.log("entreprise id ",this.y.id);

        this.userService.addUserEntreprise(this.test.id,this.y.id).subscribe((pio)=>{
          console.log("add user to entreprise")
          this.test2=pio;
          this.addRoleToUser();

        }
          );
      },
      (error) => console.log(error)
    );
  }
  goToRHList() {
    this.router.navigate(["/rh/listrh"]);
  }
  goToRHList2() {
    this.router.navigate(["/rh/addrh"]);
  }
  onSubmit() {
    if (this.formGroup.invalid) {
      this.submitted=true;
      return;
    }
   else {console.log("okkk")
      this.saveUser();
      this.goToRHList();
  }
  this.goToRHList2();
  this.goToRHList();
}
}
