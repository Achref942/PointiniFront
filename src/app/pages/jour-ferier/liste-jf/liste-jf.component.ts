import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JourFerierService } from 'src/app/Service/jour-ferier.service';

@Component({
  selector: 'app-liste-jf',
  templateUrl: './liste-jf.component.html',
  styleUrls: ['./liste-jf.component.scss']
})
export class ListeJFComponent implements OnInit {
  jFerier:any;
  constructor(private jourferierService:JourFerierService, private router:Router) { }

  ngOnInit(): void {
    this.getJFerier();
  }
  getJFerier(){
    this.jourferierService.GetJourF().subscribe(
      (resultat:any)=>{
        console.log("resultat : ",resultat)
          this.jFerier=resultat;
          console.log("after resultat : ",this.jFerier)}
          )
  }

  updjf(id:any){
    this.router.navigate(["/jourFerier/update-jf",id]);
  }
}
