import { PackService } from './../../Service/pack.service';
import { Component, OnInit } from '@angular/core';
import { Pack } from 'src/app/models/pack';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.scss']
})
export class PackComponent implements OnInit {
    pakes:Pack[];
  constructor(private packService:PackService) { }

  ngOnInit(): void {
    this.getallPakes();
  }
  getallPakes(){
    this.packService.GetPacks().subscribe(
      data=>{this.pakes=data;
      });
  }

}
