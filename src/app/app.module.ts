import { UpdateusersComponent } from "./pages/users/updateusers/updateusers.component";
import { UpdateComponent } from "./pages/role/update/update.component";
import { AddComponent } from "./pages/role/add/add.component";
import { AddUsersComponent } from "./pages/users/add-users/add-users.component";
import { ListRoleComponent } from "./pages/role/list-role/list-role.component";
import { ListeusersComponent } from "./pages/users/listeusers/listeusers.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
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
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,

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

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
