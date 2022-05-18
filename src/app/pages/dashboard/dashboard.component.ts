import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import Chart from "chart.js";
import { PointagesService } from "src/app/Service/pointages.service";



@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {



  ngOnInit() {

  }










  constructor(private pointageService:PointagesService, private route: ActivatedRoute) {

  }
 toggle = true;
 status = 'Cliquer pour Entrer';




// enableDisableRule(icon) {
//   if(this.pointageService.CheakPoinage(this.id))
//   {


//       this.toggle = !this.toggle;

//       this.status = this.toggle ? 'Cliquer pour Entrer' : 'Cliquer pour Sortir';


//   }

//   else
//     {


//       this.toggle = !this.toggle;
//       this.status = this.toggle ? 'Cliquer pour Entrer' : 'Cliquer pour Sortir';

//     }




// }
//   id(id: any) {
//     throw new Error("Method not implemented.");
//   }
}
