import { Router } from "@angular/router";
import { OperationService } from "./../../Service/operation.service";
import { Operation } from "./../../models/oparation";
import { Component, OnInit } from "@angular/core";
import { Console } from "console";
import Swal from "sweetalert2";

@Component({
  selector: "app-demande-avance",
  templateUrl: "./demande-avance.component.html",
  styleUrls: ["./demande-avance.component.scss"],
})
export class DemandeAvanceComponent implements OnInit {
  x = JSON.parse(localStorage.getItem("acteur")).id;
  operation: Operation = new Operation();
  constructor(
    private operationService: OperationService,
    private router: Router
  ) {}
  onSubmit() {
    this.operationService
      .CreatOperationAvance(this.operation, this.x)
      .subscribe(
        (date) => {
          this.operation = date;
          this.goTodashboard();
          console.log(this.operation);
        },
        (error) => console.log(error)
      );
  }
  goTodashboard() {
    this.router.navigate(["/dashboard"]);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "En cours de traitement",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  ngOnInit(): void {
    console.log("id utilisateur ", this.x);
  }
}
