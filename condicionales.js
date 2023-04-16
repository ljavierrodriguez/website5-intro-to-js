/* Condicionales

// if simple
if (condicion) {
    sentencias
}

// if else
if (condicion) {
    sentencias
} else {
    sentencias
}

// if else anidado
if (condicion) {
    sentencias
} else if (condicion) {
    sentencias
} else if (condicion) {
    sentencias
} else {
    sentencias
}

*/

let mayor = true;
let activo = false;

if(mayor){ // true
    console.log('Es mayor');
}

if(activo){
    console.log("Estoy activo");
}

if (activo){
    console.log("Estoy activo");
} else {
    console.log("No estoy activo");
}

let num1 = 8;
let num2 = 6;
let num3 = 10;

if(num1 > num2 && num1 > num3){
    console.log("El mayor es num1");
} else if (num2 > num3){
    console.log("El mayor es num2");
} else {
    console.log("El mayor es num3");
}

/* Operadores Logicos (And, Or, Not) => (&&, ||, !) */
/* 
// AND (&&)
true && true = true
true && false = false
false && false = false

// OR (||)
true || true = true
true || false = true
false || false = false

// NOT (!)
// AND (&&)
!true && !true = false
!true && !false = false
!false && !false = true

// OR (||)
!true || !true = false
!true || !false = true
!false || !false = true

*/

let error = false;

let edad = 17;

if(!(edad > 18)){
    console.log("Eres menor de edad vuelve cuando seas mayor.");
}

if(!error){
    console.log("Hay error");
}

/* Operadores de Comparacion */
/*  

=== igual que (valor, tipo)
== igual que (valor)

!== distinto de (valor, tipo)
!= distinto de (valor)

>= mayor o igual que
<= menor o igual que

> mayor que
< menor que

*/

'20' === 20 // false
'20' == 20 // true

/* Operador ternario (condicion ? true : false) */

let mayorDeEdad = edad > 18 ? true : false;
console.log(mayorDeEdad);