import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'bnp-saludo-rx',
  templateUrl: './saludo-rx.component.html',
  styleUrls: ['./saludo-rx.component.scss']
})
export class SaludoRxComponent implements OnInit {
  mensaje: string;
  fcNombre: FormControl;
  constructor() { }

  ngOnInit(): void {
    this.mensaje = 'Dime tu nombre otra vez';
    this.fcNombre = new FormControl();
    this.fcNombre.setValue('amigo');
  }

  onBorrar() {
    console.log(this.fcNombre);
    this.fcNombre.reset();
  }
}
