import { CongesService } from './../../Service/conges.service';
import { Component, OnInit } from '@angular/core';
import { Conges } from 'src/app/models/conges';

@Component({
  selector: 'app-conges',
  templateUrl: './conges.component.html',
  styleUrls: ['./conges.component.scss']
})
export class CongesComponent implements OnInit {
conges:Conges[];
  constructor(private congeService:CongesService) { }

  ngOnInit(): void {
    this.getAllConges();
  }
  getAllConges(){
    this.congeService.getConges().subscribe(
      data=>{this.conges=data;
      });
  }

}
