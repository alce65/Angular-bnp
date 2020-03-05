import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bnp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  autor: string;
  empresa: string;
  hoy: Date;

  obj: any;
  constructor() { }

  ngOnInit(): void {
    this.autor = 'Alejandro Cerezo';
    this.empresa = 'CAS';
    this.hoy =  new Date();

    this.obj = {user: 'Pepe'}

  }

}
