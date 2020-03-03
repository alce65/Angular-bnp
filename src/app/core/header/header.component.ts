import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bnp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  logo: string;
  constructor() {
   }

  ngOnInit(): void {
    this.title = 'Curso de Angular';
    this.logo = '../assets/logo.svg';
  }

}
