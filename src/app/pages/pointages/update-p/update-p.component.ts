import { Pointages } from './../../../models/pointages';
import { PointagesService } from 'src/app/Service/pointages.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-p',
  templateUrl: './update-p.component.html',
  styleUrls: ['./update-p.component.scss']
})
export class UpdatePComponent implements OnInit {
  id = this.route.snapshot.params['id'];
  pointage: Pointages = new Pointages();

  constructor(private pointageService:PointagesService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.pointageService.getPointageById(this.id).subscribe(data => {
      this.pointage = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.pointageService.UpdPointage(this.id,this.pointage).subscribe( data =>{
      this.goToList();
    }
    , error => console.log(error));
  }

  goToList(){
    this.router.navigate(['/pointages/list-p']);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: "le Pointage est mis à jour",
      showConfirmButton: false,
      timer: 1000
    })
  }

}
