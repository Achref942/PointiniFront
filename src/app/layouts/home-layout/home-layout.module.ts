import { HomeComponent } from '../../pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeLayoutRoutes } from './home-layout.routing';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeLayoutRoutes),
    FormsModule
    // NgbModule
  ],
  declarations: [

HomeComponent
  ]
})
export class HomeLayoutModule { }
