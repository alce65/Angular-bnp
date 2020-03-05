import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'bnp-saludo-local',
  templateUrl: './saludo-local.component.html',
  styleUrls: ['./saludo-local.component.scss']
})
export class SaludoLocalComponent implements OnInit {

  @ViewChild('refNombre', {static: true}) inputNombre: ElementRef;
  constructor() { }

  ngOnInit(): void {
    console.dir(this.inputNombre.nativeElement);
  }



}
