import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pack } from 'src/app/models/pack';
import { PackService } from 'src/app/Service/pack.service';

@Component({
  selector: 'app-listepack',
  templateUrl: './listepack.component.html',
  styleUrls: ['./listepack.component.scss']
})
export class ListepackComponent implements OnInit {
  pakes:Pack[];
  constructor(private packService:PackService,
    private router:Router) { }

  ngOnInit(): void {
    this.getallPakes();
  }
  getallPakes(){
    this.packService.GetPacks().subscribe(
      data=>{this.pakes=data;
      });
  }
  updPack(id:any){
    this.router.navigate(["/pack/updatepack",id]);
  }


}
