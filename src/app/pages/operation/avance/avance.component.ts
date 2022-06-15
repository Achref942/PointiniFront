import { Component, OnInit } from '@angular/core';
import { OperationService } from 'src/app/Service/operation.service';

@Component({
  selector: 'app-avance',
  templateUrl: './avance.component.html',
  styleUrls: ['./avance.component.scss']
})
export class AvanceComponent implements OnInit {
  operation :any=[];
  x=localStorage.getItem("acteur")
  y=JSON.parse(this.x).entreprise
    constructor(private operationService:OperationService) { }

    ngOnInit(): void {
  console.log("id entreprise= ",this.y.id)
   this.operationService.getAllAvance(this.y.id).subscribe(data=>{
    console.log(data);
    this.operation=data;
   })
    }
    Confirmer(id:any){
      this.operationService.confirmeAvance(id).subscribe(data=>{
        console.log("Confirmation",data)
        window.location.reload();

      })
    }

  }
