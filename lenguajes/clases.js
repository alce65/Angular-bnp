function Persona (nombre, edad) {
    this.nombre = nombre
    this.edad = edad
}

Persona.prototype.saludar = function () {
    console.log(`Hola soy ${this.nombre}, y tengo ${this.edad} años `)
}

const p1 = new Persona('Pepe', 33)
p1.saludar()

const p2 = new Persona('Elena', 35)
p2.altura = 169
delete p2.edad

console.log(p1)
console.log(p2)


//// ES6

class Alumno {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar () {
        console.log(`Hola soy ${this.nombre}, y tengo ${this.edad} años `)
    }
}


const a1 = new Alumno('Pepe', 33)
a1.saludar()
const a2 = new Alumno('Elena', 35)
a2.saludar()
a2.peso = 57
console.log(a1)
console.log(a2)

class Universitario extends Alumno {
    constructor(nombre, edad, curso) {
        super(nombre, edad)
        this.curso = curso
    }
    saludar() {
        super.saludar()
        console.log(`Estudio ${this.curso}`)
    }
}


const u1 = new Universitario('Juan', 23, 'Matematicas')
u1.saludar()