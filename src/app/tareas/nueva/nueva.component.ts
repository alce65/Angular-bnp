import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'bnp-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.scss']
})
export class NuevaComponent implements OnInit {

  fcNombre: FormControl;
  @Output() evAdd: EventEmitter<TareaModel>;
  constructor() {
    this.evAdd = new EventEmitter();
  }

  ngOnInit(): void {
    this.fcNombre = new FormControl();
  }

  onSendAdd() {
    if (this.fcNombre.value) {
      this.evAdd.next(new TareaModel(
        this.fcNombre.value));
      this.fcNombre.reset();
    }
  }

}
