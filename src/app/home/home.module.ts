import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SaludoComponent } from './saludo/saludo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, SaludoComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  exports: []
})
export class HomeModule { }