import { PresenceComponent } from './../../pages/presence/presence.component';
import { CalondarComponent } from './../../pages/calondar/calondar.component';
import { DemmandecongeComponent } from './../../pages/demmandeconge/demmandeconge.component';
import { AddUsersComponent } from './../../pages/users/add-users/add-users.component';
import { CongesComponent } from './../../pages/conges/conges.component';
import { PointagesComponent } from './../../pages/pointages/pointages.component';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { ChildrenOutletContexts, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UsersComponent } from 'src/app/pages/users/users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoleComponent } from 'src/app/pages/role/role.component';
import { JourFerierComponent } from 'src/app/pages/jour-ferier/jour-ferier.component';
import { PackComponent } from './../../pages/pack/pack.component';
import { EntrepriseComponent } from 'src/app/pages/entreprise/entreprise.component';
// import { ToastrModule } from 'ngx-toastr';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { AdminComponent } from 'src/app/pages/admin/admin.component';
import { SuperAdminComponent } from 'src/app/pages/super-admin/super-admin.component';
import { EmployeeComponent } from 'src/app/pages/employee/employee.component';
import { RHComponent } from 'src/app/pages/rh/rh.component';
import { FichedePaieComponent } from 'src/app/pages/fichede-paie/fichede-paie.component';
import { ModeKiosqueComponent } from 'src/app/pages/mode-kiosque/mode-kiosque.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    FullCalendarModule,
   // FormGroup
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    UsersComponent,
    EntrepriseComponent,
    RoleComponent,
    PackComponent,
    JourFerierComponent,
    PointagesComponent,
    CongesComponent,
    DemmandecongeComponent,
    CalondarComponent,
    PresenceComponent,
    AdminComponent,
    SuperAdminComponent,
    EmployeeComponent,
    RHComponent,
    FichedePaieComponent,
    ModeKiosqueComponent,




  ]
})

export class AdminLayoutModule {}
