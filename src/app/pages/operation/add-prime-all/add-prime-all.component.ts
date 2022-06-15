import { OperationService } from 'src/app/Service/operation.service';
import { Operation } from './../../../models/oparation';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prime-all',
  templateUrl: './add-prime-all.component.html',
  styleUrls: ['./add-prime-all.component.scss']
})
export class AddPrimeAllComponent implements OnInit {
  operation: Operation = new Operation();
  x=localStorage.getItem("acteur")
  y=JSON.parse(this.x).entreprise
  constructor(private operationService:OperationService,private router: Router) { }

  ngOnInit(): void {

  }
  goTodashboard(){
      this.router.navigate(["/operation/prime"]);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "En cours de traitement",
        showConfirmButton: false,
        timer: 1500,
      });

  }
  onSubmit(){
    this.operationService.addPrimforAll(this.operation,this.y.id).subscribe(data=>{
      this.goTodashboard();
    })
  }
}
