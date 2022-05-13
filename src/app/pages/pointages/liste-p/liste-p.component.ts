import { Component, OnInit } from '@angular/core';
import { Pointages } from 'src/app/models/pointages';
import { PointagesService } from 'src/app/Service/pointages.service';

@Component({
  selector: 'app-liste-p',
  templateUrl: './liste-p.component.html',
  styleUrls: ['./liste-p.component.scss']
})
export class ListePComponent implements OnInit {

  pointages :Pointages[];
  constructor(private pintageService:PointagesService ) { }

  ngOnInit(): void {
    this.getall();
  }
    getall(){
      this.pintageService.GetPointages().subscribe(data=>{this.pointages=data});

    }

}
