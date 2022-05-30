import { EntrepriseService } from 'src/app/Service/entreprise.service';
import { Entreprise } from './../../../models/entreprise';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addentreprise',
  templateUrl: './addentreprise.component.html',
  styleUrls: ['./addentreprise.component.scss']
})
export class AddentrepriseComponent implements OnInit {
entreprise: Entreprise=new Entreprise();
  constructor(private entrepriseService:EntrepriseService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }
  saveEntreprise(){
    this.entrepriseService.AddEntreprise(this.entreprise).subscribe(data=>{
      console.log(data);
      this.goToEntrepriseList();
    },
    error => console.log(error));
  }
  goToEntrepriseList(){
    this.router.navigate(['/entreprise/liseentreprise']);
  }
  onSubmit(){
    console.log(this.entreprise)
    this.saveEntreprise();
  }

}
