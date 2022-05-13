import { Pointages } from './../../models/pointages';
import { Component, OnInit } from '@angular/core';
import { PointagesService } from 'src/app/Service/pointages.service';

@Component({
  selector: 'app-pointages',
  templateUrl: './pointages.component.html',
  styleUrls: ['./pointages.component.scss']
})
export class PointagesComponent implements OnInit {
pointages :Pointages[];
  constructor(private pintageService:PointagesService ) { }

  ngOnInit(): void {
    this.getall();
  }
    getall(){
      this.pintageService.GetPointages().subscribe(data=>{this.pointages=data});
    }
}
