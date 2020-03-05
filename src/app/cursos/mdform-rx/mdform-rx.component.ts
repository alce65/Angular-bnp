import { Component, OnInit } from '@angular/core';
import { TURNOS, CURSOS } from 'src/app/models/curso.data';
import { Turno, Curso } from 'src/app/models/alumno.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'bnp-mdform-rx',
  templateUrl: './mdform-rx.component.html',
  styleUrls: ['./mdform-rx.component.scss']
})
export class MdformRxComponent implements OnInit {
  turnos: Array<Turno>;
  cursos: Array<Curso>;
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.turnos = TURNOS;
    this.cursos = CURSOS;
    this.form = this.fb.group(
      {
        nombre: ['', [Validators.required, Validators.minLength(2)]],
        apellidos: [],
        dni: [],
        email: [],
        nacim: [],
        coment: [],
        isOk: [false],
        turno: [null, [Validators.required]],
        curso: [null, [Validators.required]]
      }
    );
    console.log(this.form);
  }

  onSubmit() {
    console.log('Enviando', this.form.value )
  }

}
