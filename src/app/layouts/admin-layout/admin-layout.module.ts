import { CalondarComponent } from './../../pages/calondar/calondar.component';
import { DemmandecongeComponent } from './../../pages/demmandeconge/demmandeconge.component';
import { AddUsersComponent } from './../../pages/users/add-users/add-users.component';
import { CongesComponent } from './../../pages/conges/conges.component';
import { PointagesComponent } from './../../pages/pointages/pointages.component';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { ChildrenOutletContexts, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    FullCalendarModule
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
    CalondarComponent






  ]
})

export class AdminLayoutModule {}
