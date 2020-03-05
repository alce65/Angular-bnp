import { Component, OnInit } from '@angular/core';
import { TareaModel } from '../models/tarea.model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'bnp-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {
  listaTareas: Array<TareaModel>;
  constructor(public storageService: StorageService) { }

  ngOnInit(): void {
    this.listaTareas =
      this.storageService.getTaresas() ? this.storageService.getTaresas() : [];
    this.storageService.prueba();
  }

  onAdd(tarea: TareaModel) {
    this.listaTareas.push(tarea);
    this.storageService.setTareas(this.listaTareas);
  }

  onChange(state: boolean, i: number) {
    this.listaTareas[i].isCompleted = state;
    this.storageService.setTareas(this.listaTareas);
  }

  onDelete(i) {
    this.listaTareas.splice(i, 1);
    this.storageService.setTareas(this.listaTareas);
  }

}
