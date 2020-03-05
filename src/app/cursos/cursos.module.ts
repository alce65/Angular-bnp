import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { TdformComponent } from './tdform/tdform.component';
import { MdformRxComponent } from './mdform-rx/mdform-rx.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CursosComponent, TdformComponent, MdformRxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
