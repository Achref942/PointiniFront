import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Entreprise } from "src/app/models/entreprise";
import { EntrepriseService } from "src/app/Service/entreprise.service";


@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.scss']
})
export class EntrepriseComponent implements OnInit {

    entreprises : Entreprise[];
    

  constructor(private entrepriseService:EntrepriseService,
    private router: Router) { }


  ngOnInit(): void {
    this.getall();
  }
getall(){
    this.entrepriseService.getEntrepriseListe().subscribe(
      data =>{this.entreprises=data;
      });
  }

}
