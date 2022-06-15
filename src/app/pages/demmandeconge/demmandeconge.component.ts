import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conges } from 'src/app/models/conges';
import { CongesService } from 'src/app/Service/conges.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-demmandeconge',
  templateUrl: './demmandeconge.component.html',
  styleUrls: ['./demmandeconge.component.scss']
})
export class DemmandecongeComponent implements OnInit {
  conge: Conges = new Conges();
  x=localStorage.getItem("acteur");
  constructor(private congeService: CongesService, private router: Router) {}
  ngOnInit(): void {}
  saveconge() {
    this.congeService.demmandeconge(this.conge, JSON.parse(this.x).id).subscribe(
      (data) => {
        console.log(JSON.parse(this.x).id,data);
        this.goTodemmandeconge();
      },
      (error) => console.log(error)
    );
  }
  goTodemmandeconge() {
    this.router.navigate(["/dashboard"]);
    Swal.fire(
      'Demande congé !',
      'en cours de traitement',
      'success'
    )
    window.location.reload();
  }
  onSubmit() {
    console.log(this.conge);
    this.saveconge();
  }

}
