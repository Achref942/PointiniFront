import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Operation } from 'src/app/models/oparation';
import { OperationService } from 'src/app/Service/operation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-prime-one',
  templateUrl: './add-prime-one.component.html',
  styleUrls: ['./add-prime-one.component.scss']
})
export class AddPrimeOneComponent implements OnInit {
  id = this.route.snapshot.params['id'];
  operation: Operation = new Operation();


  constructor(
    private operationService: OperationService,   private route: ActivatedRoute,
    private router: Router
  ) {}
  onSubmit() {
    this.operationService
      .CreateOperationPrime(this.operation, this.id)
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
    this.router.navigate(["/operation/prime"]);
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
