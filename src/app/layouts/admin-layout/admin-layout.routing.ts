import { Pack } from 'src/app/models/pack';
import { AddemployeeComponent } from "./../../pages/employee/addemployee/addemployee.component";
import { UpdateemployeeComponent } from "./../../pages/employee/updateemployee/updateemployee.component";
import { ListemployeeComponent } from "./../../pages/employee/listemployee/listemployee.component";
import { ListrhComponent } from "./../../pages/rh/listrh/listrh.component";
import { UpdaterhComponent } from "./../../pages/rh/updaterh/updaterh.component";
import { AddrhComponent } from "./../../pages/rh/addrh/addrh.component";
import { ListadminComponent } from "./../../pages/admin/listadmin/listadmin.component";
import { UpdateadminComponent } from "./../../pages/admin/updateadmin/updateadmin.component";
import { AddadminComponent } from "./../../pages/admin/addadmin/addadmin.component";

import { RHComponent } from "./../../pages/rh/rh.component";
import { EmployeeComponent } from "./../../pages/employee/employee.component";
import { AdminComponent } from "./../../pages/admin/admin.component";
import { SuperAdminComponent } from "./../../pages/super-admin/super-admin.component";
import { CalondarComponent } from "./../../pages/calondar/calondar.component";
import { DemmandecongeComponent } from "./../../pages/demmandeconge/demmandeconge.component";
import { ListeCComponent } from "./../../pages/conges/liste-c/liste-c.component";
import { UpdateCComponent } from "./../../pages/conges/update-c/update-c.component";
import { AddCComponent } from "./../../pages/conges/add-c/add-c.component";
import { ListePComponent } from "./../../pages/pointages/liste-p/liste-p.component";
import { UpdatePComponent } from "./../../pages/pointages/update-p/update-p.component";
import { AddPComponent } from "./../../pages/pointages/add-p/add-p.component";
import { UpdateJFComponent } from "./../../pages/jour-ferier/update-jf/update-jf.component";
import { AddJFComponent } from "./../../pages/jour-ferier/add-jf/add-jf.component";
import { UpdatepackComponent } from "./../../pages/pack/updatepack/updatepack.component";
import { ListepackComponent } from "./../../pages/pack/listepack/listepack.component";
import { AddpackComponent } from "./../../pages/pack/addpack/addpack.component";
import { UpdateusersComponent } from "./../../pages/users/updateusers/updateusers.component";
import { UpdateentrepriseComponent } from "./../../pages/entreprise/updateentreprise/updateentreprise.component";
import { ListeentrepriseComponent } from "./../../pages/entreprise/listeentreprise/listeentreprise.component";
import { AddentrepriseComponent } from "./../../pages/entreprise/addentreprise/addentreprise.component";
import { AddUsersComponent } from "./../../pages/users/add-users/add-users.component";
import { ListeusersComponent } from "./../../pages/users/listeusers/listeusers.component";
import { ListRoleComponent } from "./../../pages/role/list-role/list-role.component";
import { AddComponent } from "./../../pages/role/add/add.component";
import { PauseComponent } from "./../../pages/pause/pause.component";
import { PointagesComponent } from "./../../pages/pointages/pointages.component";
import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { EntrepriseComponent } from "src/app/pages/entreprise/entreprise.component";
import { PackComponent } from "src/app/pages/pack/pack.component";
import { JourFerierComponent } from "src/app/pages/jour-ferier/jour-ferier.component";
import { UsersComponent } from "../../pages/users/users.component";
import { RoleComponent } from "src/app/pages/role/role.component";
import { CongesComponent } from "src/app/pages/conges/conges.component";
import { OperationComponent } from "src/app/pages/operation/operation.component";
import { UpdateComponent } from "src/app/pages/role/update/update.component";
import { AuthGuard } from "src/app/guard/auth.guard";
import { ListeJFComponent } from "src/app/pages/jour-ferier/liste-jf/liste-jf.component";
import { PresenceComponent } from "src/app/pages/presence/presence.component";
import { AddSAComponent } from "src/app/pages/super-admin/add-sa/add-sa.component";
import { ListSAComponent } from "src/app/pages/super-admin/list-sa/list-sa.component";
import { UpdateSAComponent } from "src/app/pages/super-admin/update-sa/update-sa.component";
import { FichedePaieComponent } from "src/app/pages/fichede-paie/fichede-paie.component";
import { ModeKiosqueComponent } from 'src/app/pages/mode-kiosque/mode-kiosque.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "user-profile",
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: "tables", component: TablesComponent, canActivate: [AuthGuard] },
  { path: "icons", component: IconsComponent, canActivate: [AuthGuard] },
  { path: "maps", component: MapsComponent, canActivate: [AuthGuard] },
  {
    path: "users",
    component: UsersComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "listeusers", component: ListeusersComponent },
      { path: "add-users", component: AddUsersComponent },
      { path: "updateusers/:id", component: UpdateusersComponent },
    ],
  },
  {
    path: "entreprise",
    component: EntrepriseComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "addenreprise", component: AddentrepriseComponent },
      { path: "liseentreprise", component: ListeentrepriseComponent },
      { path: "updateentreprise/:id", component: UpdateentrepriseComponent },
    ],
  },
  {
    path: "pack",
    component: PackComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "addpack/:id", component: AddpackComponent },
      { path: "listepack", component: ListepackComponent },
      { path: "updatepack/:id", component: UpdatepackComponent },
    ],
  },
  {
    path: "jourFerier",
    component: JourFerierComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "add-jf", component: AddJFComponent },
      { path: "update-jf/:id", component: UpdateJFComponent },
      { path: "liste-jf", component: ListeJFComponent },
    ],
  },
  {
    path: "role",
    component: RoleComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "add", component: AddComponent },
      { path: "update/:id", component: UpdateComponent },
      { path: "list-role", component: ListRoleComponent },
    ],
  },
  {
    path: "pointages",
    component: PointagesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "add-p", component: AddPComponent },
      { path: "update-p/:id", component: UpdatePComponent },
      { path: "list-p", component: ListePComponent },
    ],
  },
  {
    path: "conges",
    component: CongesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "add-c", component: AddCComponent },
      { path: "liste-c", component: ListeCComponent },
      { path: "update-c", component: UpdateCComponent },
    ],
  },
  { path: "pause", component: PauseComponent, canActivate: [AuthGuard] },
  {
    path: "operation",
    component: OperationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "demmandeconge",
    component: DemmandecongeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "calondar",
    component: CalondarComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "presence",
    component: PresenceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "superadmin",
    component: SuperAdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "addsa", component: AddSAComponent },
      { path: "updatesa/:id", component: UpdateSAComponent },
      { path: "listsa", component: ListSAComponent },
    ],
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "addadmin/:id", component: AddadminComponent },
      { path: "updateadmin/:id", component: UpdateadminComponent },
      { path: "listadmin", component: ListadminComponent },
    ],
  },
  {
    path: "employee",
    component: EmployeeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "addemployee", component: AddemployeeComponent },
      { path: "updateemployee/:id", component: UpdateemployeeComponent },
      { path: "listemployee", component: ListemployeeComponent },
    ],
  },
  {
    path: "rh",
    component: RHComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "addrh", component: AddrhComponent },
      { path: "updaterh/:id", component: UpdaterhComponent },
      { path: "listrh", component: ListrhComponent },
    ],
  },
  {path:"fichedepie",component:FichedePaieComponent, canActivate:[AuthGuard]},
  {path:"modekiosque",component:ModeKiosqueComponent, canActivate:[AuthGuard]}
];
