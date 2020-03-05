import { Injectable } from '@angular/core';
import { TareaModel } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  prueba() {
    console.log('Prueba');
  }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value) );
  }

  getItem(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  setTareas(value: Array<TareaModel>) {
    const key = 'tareas';
    localStorage.setItem(key, JSON.stringify(value) );
  }

  getTaresas(): Array<TareaModel> {
    const key = 'tareas';
    return JSON.parse(localStorage.getItem(key));
  }

  removeTareas() {
    const key = 'tareas';
    localStorage.removeItem(key);
  }

}
