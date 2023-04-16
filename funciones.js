/* Funciones */
/* 

function funcName (args) {
    sentencias
}

let funcName = function(args){
    sentencias
}

let funcName = (args) => {
    sentencias
}

// ejecutar la funcion
funcName();

*/

function saludo(){
    console.log("Hola Jack desde una funcion");
}

saludo();
saludo();
saludo();
saludo();
saludo();
saludo();

function imprimirNombreCompleto(nombre, apellido){
    return nombre + " " + apellido;
}

console.log(imprimirNombreCompleto('John', 'Doe'));
console.log(imprimirNombreCompleto('Doe', 'Jane'));

let fullname = imprimirNombreCompleto('Jack', 'Sparrow');
console.log(fullname);

console.log("La suma es: " + sumar(10, 10));

function sumar(a, b = 10) {
    return a + b;
}

function restar(a, b){
    let result = a - b;
    return result;
}

function operaciones(fncallback, a, b){ 
    return fncallback(a, b);
}

console.log(operaciones(restar, 10, 23))
console.log(operaciones(sumar, 20, 10))


let multiplicar = function(a, b){
    return a * b;
}
console.log(multiplicar(10, 10));

let afSumar1 = (a, b) => {
    return a + b
} 
console.log(afSumar1(10, 10))

let afSumar2 = (a, b) => a + b;
console.log(afSumar2(30, 10))

/* 
function sumarValores(total, valor){
    return total + valor;
} 
*/
/* 
let sumarValores = (total, valor) => {
    return total + valor
} 
*/

/* let sumarValores = (total, valor) => total + valor; */

let valores = [1, 2, 3, 4];
/* console.log(valores.reduce(sumarValores, 0)); */
console.log(valores.reduce((total, valor) => total + valor, 0));