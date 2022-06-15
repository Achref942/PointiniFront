import { Component, OnInit } from '@angular/core';
import { OperationService } from 'src/app/Service/operation.service';

@Component({
  selector: 'app-penalite',
  templateUrl: './penalite.component.html',
  styleUrls: ['./penalite.component.scss']
})
export class PenaliteComponent implements OnInit {
  operation :any=[];
  x=localStorage.getItem("acteur")
  y=JSON.parse(this.x).entreprise
    constructor(private operationService:OperationService) { }

    ngOnInit(): void {
  console.log("id entreprise= ",this.y.id)
   this.operationService.getAllPenalite(this.y.id).subscribe(data=>{
    console.log(data);
    this.operation=data;
   })
    }

  }
