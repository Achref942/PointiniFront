import { Entreprise } from './../../../models/entreprise';
import { OperationService } from 'src/app/Service/operation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.scss']
})
export class PrimeComponent implements OnInit {
operation :any=[];
x=localStorage.getItem("acteur")
y=JSON.parse(this.x).entreprise
  constructor(private operationService:OperationService) { }

  ngOnInit(): void {
console.log("id entreprise= ",this.y.id)
 this.operationService.getAllPrime(this.y.id).subscribe(data=>{
  console.log(data);
  this.operation=data;
 })
  }

}
