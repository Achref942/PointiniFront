import { JourFerier } from './../../../models/jour-ferier';
import { Router } from '@angular/router';
import { JourFerierService } from './../../../Service/jour-ferier.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-jf',
  templateUrl: './add-jf.component.html',
  styleUrls: ['./add-jf.component.scss']
})
export class AddJFComponent implements OnInit {
jourf : JourFerier=new JourFerier();

  constructor(private jferierServicer:JourFerierService, private router: Router   ) { }

  ngOnInit(): void {
  }
   savepack(){
    this.jferierServicer.AddJF(this.jourf).subscribe(data=>{
      console.log(data);
      this.goToPackList();
    },
    error => console.log(error));
  }
  goToPackList(){
    this.router.navigate(['/jourFerier/liste-jf'])
  }
  onSubmit(){
    console.log(this.jourf);
    this.savepack();

  }


}
