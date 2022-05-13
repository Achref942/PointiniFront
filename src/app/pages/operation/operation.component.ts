import { OperationService } from './../../Service/operation.service';
import { Operation } from './../../models/oparation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {
operations:Operation[];

  constructor(private operationService:OperationService) { }

  ngOnInit(): void {
    this.getAllOperation();
  }
  getAllOperation(){
    this.operationService.GetAllOperations().subscribe(data=>{this.operations=data
    });
  }

}
