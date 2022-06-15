import { Operation } from './../../models/oparation';
import { OperationService } from './../../Service/operation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {
operation:any=[];
  constructor(private operationService:OperationService) { }

  ngOnInit(): void {
this.operationService.GetAllOperations().subscribe(data=>{
  this.operation=data
   console.log(this.operation)
  });
  }

}
