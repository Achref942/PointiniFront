
import { Pack } from 'src/app/models/pack';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackService } from 'src/app/Service/pack.service';

@Component({
  selector: 'app-updatepack',
  templateUrl: './updatepack.component.html',
  styleUrls: ['./updatepack.component.scss']
})
export class UpdatepackComponent implements OnInit {
  id = this.route.snapshot.params['id'];
  pack: Pack=new Pack();

  constructor(private packService: PackService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.packService.getPackById(this.id).subscribe(data => {
      this.pack = data;
    }, error => console.log(error));
  }
  goToPackList(){
    this.router.navigate(['/pack/listepack']);
  }
  onSubmit(){
    this.packService.UpdPackr(this.id,this.pack).subscribe( data =>{
      this.goToPackList();
    }
    , error => console.log(error));
  }

}
