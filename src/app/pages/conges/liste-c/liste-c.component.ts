import { Component, OnInit } from "@angular/core";
import { Conges } from "src/app/models/conges";
import { CongesService } from "src/app/Service/conges.service";

@Component({
  selector: "app-liste-c",
  templateUrl: "./liste-c.component.html",
  styleUrls: ["./liste-c.component.scss"],
})
export class ListeCComponent implements OnInit {
  conges: Conges[];
  constructor(private congeService: CongesService) {}

  ngOnInit(): void {
    this.getAllConges();
  }
  getAllConges() {
    this.congeService.getConges().subscribe((data) => {
      this.conges = data;
    });
  }
}
