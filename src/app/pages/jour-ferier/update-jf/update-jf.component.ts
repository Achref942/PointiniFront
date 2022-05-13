import { JourFerierService } from 'src/app/Service/jour-ferier.service';
import { JourFerier } from './../../../models/jour-ferier';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-jf',
  templateUrl: './update-jf.component.html',
  styleUrls: ['./update-jf.component.scss']
})
export class UpdateJFComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  jourf: JourFerier = new JourFerier();


  constructor(private jfService: JourFerierService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.jfService.getJFById(this.id).subscribe(data => {
      this.jourf = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.jfService.UpdJF(this.id, this.jourf).subscribe( data =>{
      this.goToJFList();
    }
    , error => console.log(error));
  }

  goToJFList(){
    this.router.navigate(['/jourFerier/liste-jf']);
  }

}
