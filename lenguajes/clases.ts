
interface Humano {
    nombre: string;
}

let h: Humano;

class Alumno implements Humano {
    /* public nombre: string;
    public edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    } */

    constructor(
        public nombre: string,
        public edad: number) {}

    saludar() {
        console.log(`Hola soy ${this.nombre}, y tengo ${this.edad} años `);
    }
}


const a1 = new Alumno('Pepe', 33);
// a1.saludar();
const a2 = new Alumno('Elena', 35);
// a2.saludar();

/* let a3: Alumno;
a3 = {nombre: 'Ramón', edad: 32};
console.log(a3); */


console.log(a1);
console.log(a2);


class Universitario extends Alumno {
    public curso: string;
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }
    saludar() {
        super.saludar();
        console.log(`Estudio ${this.curso}`);
    }
}


const u1 = new Universitario('Juan', 23, 'Matematicas');
u1.saludar();
