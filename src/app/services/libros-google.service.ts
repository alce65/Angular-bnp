import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LibroModel } from '../models/libro.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibrosGoogleService {
  urlBase: string;
  libros: Array<LibroModel>
  constructor(private http: HttpClient) { 
    this.urlBase = environment.urlBase;
  }

  getLibros(clave: string): Promise<Array<LibroModel>>  {
    return this.http.get( this.urlBase + clave)
    .toPromise()
    .then(
      (data: any) => {
        this.libros = data.items.map(
          item => {return new LibroModel(
            item.id,
            item.volumeInfo.authors,
            item.volumeInfo.title
          ); }
        );
        return this.libros;
      }
    );

  }

  getLibrosRx(clave: string): Observable<Array<LibroModel>> {

    return this.http.get( this.urlBase + clave )
    .pipe(
      map(
        (data: any) => data.items.map(
            item => {return new LibroModel(
              item.id,
              item.volumeInfo.authors,
              item.volumeInfo.title
            ); }
          )
        ) // Fin del operador map
    ); // Fin del pipe
  }
}
