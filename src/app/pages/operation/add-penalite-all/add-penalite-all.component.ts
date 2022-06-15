import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operation } from 'src/app/models/oparation';
import { OperationService } from 'src/app/Service/operation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-penalite-all',
  templateUrl: './add-penalite-all.component.html',
  styleUrls: ['./add-penalite-all.component.scss']
})
export class AddPenaliteAllComponent implements OnInit {
  operation: Operation = new Operation();
  x=localStorage.getItem("acteur")
  y=JSON.parse(this.x).entreprise
  constructor(private operationService:OperationService,private router: Router) { }

  ngOnInit(): void {

  }
  goTodashboard(){
      this.router.navigate(["/operation/penalite"]);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "En cours de traitement",
        showConfirmButton: false,
        timer: 1500,
      });

  }
  onSubmit(){
    this.operationService.addPenaliteforAll(this.operation,this.y.id).subscribe(data=>{
      this.goTodashboard();
    })
  }
}
