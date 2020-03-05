import { Turno, Curso } from './alumno.model';

export const TURNOS: Array<Turno> = [
    new Turno('M', 'Mañana', '9:00-14:00'),
    new Turno('T', 'Tarde', '16:00-20:00'),
    new Turno('C', 'Completo', '9:00-18:00')
];

export const CURSOS: Array<Curso> = [
    new Curso('01', 'Angular', 'Aprendiendo Angular ...'),
    new Curso('02', 'React', 'Aprendiendo React ...'),
    new Curso('03', 'Vue', 'Aprendiendo Vue ...')
]