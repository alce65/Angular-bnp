import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { GoogleComponent } from './google/google.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ByServiceComponent } from './by-service/by-service.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [LibrosComponent, GoogleComponent, ByServiceComponent, MenuComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }
