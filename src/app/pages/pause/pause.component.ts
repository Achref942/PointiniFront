import { Pause } from './../../models/pause';
import { PauseService } from './../../Service/pause.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pause',
  templateUrl: './pause.component.html',
  styleUrls: ['./pause.component.scss']
})
export class PauseComponent implements OnInit {
pauses:any;
  constructor(private pauseService:PauseService) { }
  getallpauses(){
    this.pauseService.GetAll().subscribe((data)=>{this.pauses=data
    });
    console.log("test1",this.pauses)
  }
  ngOnInit(): void {
    this.pauseService.GetAll().subscribe((data:any)=>{

      console.log("test1",data);
      this.pauses=data;
      console.log("test2",this.pauses);

    });

  }




}
