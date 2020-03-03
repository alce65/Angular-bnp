import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bnp-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit {
  name: string;
  mensaje: string;
  constructor() { }

  ngOnInit(): void {
    this.mensaje = 'Dime tu nombre';
    this.name = 'amigo';
  }

  onBorrar(ev) {
    console.log(ev);
    this.name = '';

  }
}
