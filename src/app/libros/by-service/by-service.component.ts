import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LibroModel } from 'src/app/models/libro.model';
import { LibrosGoogleService } from 'src/app/services/libros-google.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bnp-by-service',
  templateUrl: './by-service.component.html',
  styleUrls: ['./by-service.component.scss']
})
export class ByServiceComponent implements OnInit {
  fcClave: FormControl;
  libros: Array<LibroModel>;
  libros$: Observable<Array<LibroModel>>;

  constructor(private lg: LibrosGoogleService) { }

  ngOnInit(): void {
    this.fcClave = new FormControl()
    this.libros = [];
  }

  onBuscar() {
    if (this.fcClave.value) {
      this.lg.getLibros(this.fcClave.value)
      .then( data => this.libros = data );
    }
  }

  onBuscarRx() {
    if (this.fcClave.value) {
      // this.libros$ =
      this.lg.getLibrosRx(this.fcClave.value)
      .subscribe( data => this.libros = data);
    }
  }

}
