import { Component, OnInit } from "@angular/core";
import { OperationService } from "src/app/Service/operation.service";

@Component({
  selector: "app-list-operation",
  templateUrl: "./list-operation.component.html",
  styleUrls: ["./list-operation.component.scss"],
})
export class ListOperationComponent implements OnInit {
  operation: any = [];
  constructor(private operationService: OperationService) {}

  ngOnInit(): void {
    this.operationService.GetAllOperations().subscribe((data) => {
      this.operation = data;
      console.log(this.operation);
    });
  }
}
