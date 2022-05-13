import { JourFerierService } from './../../Service/jour-ferier.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular';
@Component({
  selector: 'app-jour-ferier',
  templateUrl: './jour-ferier.component.html',
  styleUrls: ['./jour-ferier.component.scss']
})
export class JourFerierComponent implements OnInit {
  jFerier:any;
  constructor(private jourferierService:JourFerierService) { }

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

}
