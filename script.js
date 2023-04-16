console.log("Cargando un archivo externo");

/* 

var, let, const

tipos de datos o Data Types:

Primitives:

String, Number, Boolean, Undefined, Symbol

Object:

Null, Array, Literal Object


*/
/* String */
let nombre = "Luis"; // string
let apellido = 'Rodriguez';
const nombreCompleto = `Luis Rodriguez`;

/* Number */
let a = 40; // number
let b = -10;
let c = -4.5;
let d = 4.5;

/* Boolean */
let active = false; // boolean
let single = true; // boolean

/* Undefined */
let direccion; // undefined

/* Object */
/* Null */
let address = null; // object

/* Literal Object */
/* 

let obj = {
    propiedad: valor,
}

*/
let persona = {
    nombre: 'John',
    apellido: 'Doe',
    edad: 'Unknown',
    single: false,
    lucky_numbers: [1, 2]
}

console.log(persona.nombre);
console.log(persona['nombre']);

/* Array */
/* 

let arr = [valor1, valor2, ...valorN];

*/

let numbers = [1, 2, 3, 4, 5, 6];
let datos = [true, 1, {name: 'John'}, [1, 2], "Luis"];
let alumnos = [
    { id: 1, name: 'Hugo'},
    { id: 2, name: 'Paco'},
    { id: 3, name: 'Luis'},
];

console.log(alumnos[0]);