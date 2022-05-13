import { CongesService } from "src/app/Service/conges.service";
import { Conges } from "src/app/models/conges";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-c",
  templateUrl: "./add-c.component.html",
  styleUrls: ["./add-c.component.scss"],
})
export class AddCComponent implements OnInit {
  conge: Conges = new Conges();
  constructor(private congeService: CongesService, private router: Router) {}

  ngOnInit(): void {}
  saveconge() {
    this.congeService.AddConges(this.conge).subscribe(
      (data) => {
        console.log(data);
        this.goTocongeList();
      },
      (error) => console.log(error)
    );
  }
  goTocongeList() {
    this.router.navigate(["/conges/liste-c"]);
  }
  onSubmit() {
    console.log(this.conge);
    this.saveconge();
  }
}
