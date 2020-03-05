import { Component, OnInit, ViewChild } from '@angular/core';
import { Curso, Turno, AlumnoModel } from 'src/app/models/alumno.model';
import { TURNOS, CURSOS } from 'src/app/models/curso.data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bnp-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.scss']
})
export class TdformComponent implements OnInit {
  turnos: Array<Turno>;
  cursos: Array<Curso>;
  alumno: AlumnoModel;
  @ViewChild('formCurso', {static: true}) form: NgForm;
  constructor() { }

  ngOnInit(): void {
    this.turnos = TURNOS;
    this.cursos = CURSOS;
    this.alumno = new AlumnoModel();
    console.log(this.form);
  }

  onSubmit() {
    console.log('Enviando', this.alumno);
  }
}
