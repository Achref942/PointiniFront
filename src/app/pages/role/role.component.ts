import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig,  ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RoleService } from 'src/app/Service/role.service';



@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {


     roles:any;

  constructor(private roleService:RoleService,
     private modalService: NgbModal) {

      }


      ngOnInit(): void {
        this.getroles();
      }

      getroles(){
        this.roleService.GetAll().subscribe(
          (resultat:any)=>{
          console.log("resultat : ",resultat)
            this.roles=resultat;
            console.log("after resultat : ",this.roles)}
            )
      }





}
