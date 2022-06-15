import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Operation } from 'src/app/models/oparation';
import { OperationService } from 'src/app/Service/operation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-penalite-one',
  templateUrl: './add-penalite-one.component.html',
  styleUrls: ['./add-penalite-one.component.scss']
})
export class AddPenaliteOneComponent implements OnInit {
  id = this.route.snapshot.params['id'];
  operation: Operation = new Operation();


  constructor(
    private operationService: OperationService,   private route: ActivatedRoute,
    private router: Router
  ) {}
  onSubmit() {
    this.operationService
      .CreateOperationPenalite(this.operation, this.id)
      .subscribe(
        (date) => {
          this.operation = date;
          this.goTodashboard();
          console.log(this.operation);
        },
        (error) => console.log(error)
      );
  }
  goTodashboard() {
    this.router.navigate(["/operation/penalite"]);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "En cours de traitement",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  ngOnInit(): void {

  }
}
