import { EntrepriseService } from 'src/app/Service/entreprise.service';
import { Pack } from './../../../models/pack';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PackService } from 'src/app/Service/pack.service';
import { TreeGridMatchingRecordsOnlyFilteringStrategy } from 'igniteui-angular';

@Component({
  selector: 'app-addpack',
  templateUrl: './addpack.component.html',
  styleUrls: ['./addpack.component.scss']
})
export class AddpackComponent implements OnInit {
  id = this.route.snapshot.params['id'];
  pack : Pack=new Pack();
  pack2 :any
  constructor(private packService:PackService,private entrepriseService:EntrepriseService,
    private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

  }
  savepack(){
    this.packService.AddPack(this.pack).subscribe(data=>{
      console.log(data);
      this.pack2=data;
      console.log("pack created",this.pack2)
      this.entrepriseService.AddPackToEntreprise(this.pack2.id,this.id).subscribe(data2=>{console.log("data2 ",data2)})
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
