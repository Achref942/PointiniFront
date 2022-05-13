import { Pack } from './../../../models/pack';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackService } from 'src/app/Service/pack.service';
import { TreeGridMatchingRecordsOnlyFilteringStrategy } from 'igniteui-angular';

@Component({
  selector: 'app-addpack',
  templateUrl: './addpack.component.html',
  styleUrls: ['./addpack.component.scss']
})
export class AddpackComponent implements OnInit {
  pack : Pack=new Pack();
  constructor(private packService:PackService,
    private router: Router) { }

  ngOnInit(): void {
  }
  savepack(){
    this.packService.AddPack(this.pack).subscribe(data=>{
      console.log(data);
      this.goToPackList();
    },
    error => console.log(error));
  }
  goToPackList(){
    this.router.navigate(['/pack/listepack'])
  }
  onSubmit(){
    console.log(this.pack);
    this.savepack();

  }
}
