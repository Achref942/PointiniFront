import { Entreprise } from "src/app/models/entreprise";
import { EntrepriseService } from "src/app/Service/entreprise.service";
import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { Router } from "@angular/router";

@Component({
  selector: "app-notreentreprise",
  templateUrl: "./notreentreprise.component.html",
  styleUrls: ["./notreentreprise.component.scss"],
})
export class NotreentrepriseComponent implements OnInit {
  Entrp = JSON.parse(localStorage.getItem("acteur")).entreprise;
  entreprise: Entreprise = new Entreprise();
  constructor(
    private entrepriseService: EntrepriseService,
    private router: Router
  ) {}
  onSubmit() {
    this.entrepriseService.UpdEntreprise(this.Entrp.id, this.entreprise).subscribe(
      (data) => {
        this.entreprise = data;
        this.goTodashboard();
        console.log(this.entreprise);
      },
      (error) => console.log(error)
    );
  }
  goTodashboard() {
    this.router.navigate(["/dashboard"]);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Entreprise Modifier",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  ngOnInit(): void {
    this.entrepriseService.getEntrepriseById(this.Entrp.id).subscribe(data => {
      this.entreprise = data;
    }, error => console.log(error));
    console.log("id entreprise ",this.Entrp.id)
  }
}
