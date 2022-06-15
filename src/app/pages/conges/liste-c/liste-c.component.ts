import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Conges } from "src/app/models/conges";
import { CongesService } from "src/app/Service/conges.service";

@Component({
  selector: "app-liste-c",
  templateUrl: "./liste-c.component.html",
  styleUrls: ["./liste-c.component.scss"],
})
export class ListeCComponent implements OnInit {
  conges: Conges[];
  constructor(private congeService: CongesService,private router:Router) {}

  ngOnInit(): void {
    this.getAllConges();
  }
  getAllConges() {
    this.congeService.getConges().subscribe((data) => {
      this.conges = data;
    });
  }
  Confirmer(id:any){
      this.congeService.Confimerconge(id).subscribe((data)=>{
        console.log(data);
      })
      window.location.reload();
  }
  Update(id:any){
    this.router.navigate(["/conges/update-c",id]);
  }
}
