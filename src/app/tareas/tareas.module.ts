import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';
import { NuevaComponent } from './nueva/nueva.component';
import { ItemComponent } from './item/item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TareasComponent, NuevaComponent, ItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }
