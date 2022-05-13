import { PauseService } from './../../Service/pause.service';
import { Pause } from './../../models/pause';
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
  }

  getallpauses(){
    this.pauseService.getPauses().subscribe(data=>{this.pause=data
    });
  }


}
