export class AlumnoModel {
    constructor(
        public nombre: string = '',
        public apellidos: string = '',
        public dni: string = '',
        public email: string = '',
        public nacim: string = '',
        public coment: string = '',
        public isOk: boolean = false,
        public turno: Turno = null,
        public curso: Curso = null,
    ) {}
}

export class Turno {
    constructor(
        public id: string,
        public nombre: string,
        public info: string
        ) {}
}

export class Curso {
    constructor(
        public id: string,
        public nombre: string,
        public info: string
        ) {}
}




