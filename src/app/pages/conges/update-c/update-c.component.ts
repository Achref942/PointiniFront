import { Conges } from 'src/app/models/conges';
import { CongesService } from 'src/app/Service/conges.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-c',
  templateUrl: './update-c.component.html',
  styleUrls: ['./update-c.component.scss']
})
export class UpdateCComponent implements OnInit {
  id = this.route.snapshot.params['id'];
  conge: Conges=new Conges();

  constructor( private congesService:CongesService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.congesService.getCongesById(this.id).subscribe(data => {
      this.conge = data;
    }, error => console.log(error));
  }
  goToCongeList(){
    this.router.navigate(['/conges/liste-c']);
  }
  onSubmit(){
    this.congesService.UpdConges(this.id,this.conge).subscribe( data =>{
      this.goToCongeList();
    }
    , error => console.log(error));
  }
}
