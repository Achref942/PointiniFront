import { EntrepriseService } from 'src/app/Service/entreprise.service';
import { Component, OnInit } from '@angular/core';
import { Entreprise } from 'src/app/models/entreprise';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateentreprise',
  templateUrl: './updateentreprise.component.html',
  styleUrls: ['./updateentreprise.component.scss']
})
export class UpdateentrepriseComponent implements OnInit {
  id = this.route.snapshot.params['id'];
  entreprise: Entreprise=new Entreprise();

  constructor(private entrepriseService: EntrepriseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.entrepriseService.getEntrepriseById(this.id).subscribe(data => {
      this.entreprise = data;
    }, error => console.log(error));
  }
  goToEntrepriseList(){
    this.router.navigate(['/entreprise/liseentreprise']);
  }
  onSubmit(){
    this.entrepriseService.UpdEntreprise(this.id,this.entreprise).subscribe( data =>{
      this.goToEntrepriseList();
    }
    , error => console.log(error));
  }


}
