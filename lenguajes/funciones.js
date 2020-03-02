
// declaracion -> hoisting
function suma(a = 0,b = 0) {
    return a+b
}


console.log(suma(2,6))
console.log(suma())
console.log(suma(2,6,7,8,9))
console.log(-6/0)

// asignacion
const resta = function (a,b) {
    return a - b
}

//ES6 arrow functions o lambdas

// const prod = (a,b) => {return a*b}
const prod = (a,b) => a*b

const cuad = a => a*a

console.log(resta(2,6))

setTimeout( () => console.log('Pintando') ,2000)

const numbers = [7, 5, 8, 3, 9]

const cuadrados = numbers.map(item => item*item)
console.log(cuadrados)