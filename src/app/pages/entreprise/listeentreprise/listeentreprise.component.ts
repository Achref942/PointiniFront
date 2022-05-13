import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Entreprise } from 'src/app/models/entreprise';
import { EntrepriseService } from 'src/app/Service/entreprise.service';

@Component({
  selector: 'app-listeentreprise',
  templateUrl: './listeentreprise.component.html',
  styleUrls: ['./listeentreprise.component.scss']
})
export class ListeentrepriseComponent implements OnInit {

  entreprises : Entreprise[];

  constructor(private entrepriseService:EntrepriseService,
    private router: Router,private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.getall();
  }
getall(){
    this.entrepriseService.getEntrepriseListe().subscribe(
      data =>{this.entreprises=data
      });
  }
  updEntreprise(id:any){
    this.router.navigate(["/entreprise/updateentreprise",id]);
  }

}
