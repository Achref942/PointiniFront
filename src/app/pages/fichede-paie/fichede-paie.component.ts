import { UserService } from 'src/app/Service/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fichede-paie',
  templateUrl: './fichede-paie.component.html',
  styleUrls: ['./fichede-paie.component.scss']
})
export class FichedePaieComponent implements OnInit {
id=JSON.parse(localStorage.getItem("acteur")).id
  constructor(private userService:UserService,private route: ActivatedRoute,
    private router: Router) { }
Submit(){
  console.log(this.id)
this.userService.fichedePaie(this.id).subscribe((data)=>{
  console.log(data);
})
}

  ngOnInit(): void {
  }

}
