import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient  } from '@angular/common/http';
import { LibroModel } from 'src/app/models/libro.model';

@Component({
  selector: 'bnp-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {
  fcClave: FormControl;
  uRLBase: string;
  libros: Array<LibroModel>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fcClave = new FormControl();
    this.uRLBase = environment.urlBase;
    this.libros = [];
  }

  onBuscar() {
    if (this.fcClave.value) {
      this.http.get(this.uRLBase + this.fcClave.value)
      .toPromise().then(

        (data: any) => {
          this.libros = data.items.map(
            item => {return new LibroModel(
              item.id,
              item.volumeInfo.authors,
              item.volumeInfo.title
            ); }
          );
          console.log( this.libros);
        }
      );
    }
  }
  onBuscarRx() {
    if (this.fcClave.value) {
      this.http.get(this.uRLBase + this.fcClave.value)
      .subscribe(
        (data: any) => {
          this.libros = data.items.map(
            item => {return new LibroModel(
              item.id,
              item.volumeInfo.authors,
              item.volumeInfo.title
            ); }
          );
          console.log( this.libros);
        }
      );
    }
  }

}
