import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SaludoComponent } from './saludo/saludo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaludoRxComponent } from './saludo-rx/saludo-rx.component';
import { SaludoLocalComponent } from './saludo-local/saludo-local.component';

@NgModule({
  declarations: [HomeComponent, SaludoComponent, SaludoRxComponent, SaludoLocalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ],
  providers: [],
  exports: []
})
export class HomeModule { }
