import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pointages } from 'src/app/models/pointages';
import { PointagesService } from 'src/app/Service/pointages.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-p',
  templateUrl: './add-p.component.html',
  styleUrls: ['./add-p.component.scss']
})
export class AddPComponent implements OnInit {
  id = this.route.snapshot.params['id'];
  pointage: Pointages = new Pointages();
  constructor(private pointageService:PointagesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

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
  onSubmit(){
    this.pointageService.createPoinage(this.pointage,this.id).subscribe( data =>{
      this.goToList();
    }
    , error => console.log(error));
}
}
