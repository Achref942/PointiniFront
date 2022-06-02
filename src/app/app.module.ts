import { UpdateusersComponent } from "./pages/users/updateusers/updateusers.component";
import { UpdateComponent } from "./pages/role/update/update.component";
import { AddComponent } from "./pages/role/add/add.component";
import { AddUsersComponent } from "./pages/users/add-users/add-users.component";
import { ListRoleComponent } from "./pages/role/list-role/list-role.component";
import { ListeusersComponent } from "./pages/users/listeusers/listeusers.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormGroup, FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { AddentrepriseComponent } from "./pages/entreprise/addentreprise/addentreprise.component";
import { ListeentrepriseComponent } from "./pages/entreprise/listeentreprise/listeentreprise.component";
import { UpdateentrepriseComponent } from "./pages/entreprise/updateentreprise/updateentreprise.component";
import { ListepackComponent } from "./pages/pack/listepack/listepack.component";
import { AddpackComponent } from "./pages/pack/addpack/addpack.component";
import { UpdatepackComponent } from "./pages/pack/updatepack/updatepack.component";
import { AddJFComponent } from "./pages/jour-ferier/add-jf/add-jf.component";
import { UpdateJFComponent } from "./pages/jour-ferier/update-jf/update-jf.component";
import { ListeJFComponent } from "./pages/jour-ferier/liste-jf/liste-jf.component";
import { AddPComponent } from "./pages/pointages/add-p/add-p.component";
import { UpdatePComponent } from "./pages/pointages/update-p/update-p.component";
import { ListePComponent } from "./pages/pointages/liste-p/liste-p.component";
import { AddCComponent } from "./pages/conges/add-c/add-c.component";
import { UpdateCComponent } from "./pages/conges/update-c/update-c.component";
import { ListeCComponent } from "./pages/conges/liste-c/liste-c.component";

import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AddSAComponent } from "./pages/super-admin/add-sa/add-sa.component";
import { ListSAComponent } from "./pages/super-admin/list-sa/list-sa.component";
import { UpdateSAComponent } from "./pages/super-admin/update-sa/update-sa.component";
import { AddadminComponent } from './pages/admin/addadmin/addadmin.component';
import { ListadminComponent } from './pages/admin/listadmin/listadmin.component';
import { UpdateadminComponent } from './pages/admin/updateadmin/updateadmin.component';
import { AddrhComponent } from './pages/rh/addrh/addrh.component';
import { UpdaterhComponent } from './pages/rh/updaterh/updaterh.component';
import { ListrhComponent } from './pages/rh/listrh/listrh.component';
import { AddemployeeComponent } from './pages/employee/addemployee/addemployee.component';
import { UpdateemployeeComponent } from './pages/employee/updateemployee/updateemployee.component';
import { ListemployeeComponent } from './pages/employee/listemployee/listemployee.component';
import { FichedePaieComponent } from './pages/fichede-paie/fichede-paie.component';
import { ModeKiosqueComponent } from './pages/mode-kiosque/mode-kiosque.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    //FormGroup

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    HomeLayoutComponent,

















    // users
    UpdateusersComponent,
    AddUsersComponent,
    ListeusersComponent,

    //role
    ListRoleComponent,
    AddComponent,
    UpdateComponent,

    //entreprise
    AddentrepriseComponent,
    UpdateentrepriseComponent,
    ListeentrepriseComponent,

    //pack
    ListepackComponent,
    AddpackComponent,
    UpdatepackComponent,

    //jourFerier
    AddJFComponent,
    UpdateJFComponent,
    ListeJFComponent,

    //pointage
    AddPComponent,
    UpdatePComponent,
    ListePComponent,

    //conge
    AddCComponent,
    UpdateCComponent,
    ListeCComponent,

    //SuperAdmin
    AddSAComponent,
    ListSAComponent,
    UpdateSAComponent,

    //Admin
    AddadminComponent,
    ListadminComponent,
    UpdateadminComponent,

    //rh
    AddrhComponent,
    UpdaterhComponent,
    ListrhComponent,
    AddemployeeComponent,
    UpdateemployeeComponent,
    ListemployeeComponent,







  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
