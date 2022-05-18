import { PauseService } from './../../Service/pause.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pause',
  templateUrl: './pause.component.html',
  styleUrls: ['./pause.component.scss']
})
export class PauseComponent implements OnInit {
pause:any;
  constructor(private pauseService:PauseService) { }

  ngOnInit(): void {

    this.getallpauses();
    console.log("test2",this.pause)
  }
  getallpauses(){
    this.pauseService.GetAll().subscribe(data=>{this.pause=data
    });
    console.log("test1",this.pause)
  }



}
