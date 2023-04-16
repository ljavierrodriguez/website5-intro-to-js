/* Ciclos

for(contador; condicion; incremento){
    sentencias
}

for(indice in coleccion){
    sentecias
}

for(valor of coleccion){
    sentencias
}

while(condicion){
    sentencias
}

do {
    sentencias 
} while(condicion)

*/

let nombres = ["Hugo", "Paco", "Luis"];

for(let i = 1; i <= 10; i++){
    console.log(i);
}

for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

for(let indice in nombres){ // devuelve la posicion donde consigue un valor
    console.log(nombres[indice]);
}

for(let nombre of nombres){ // devuelve el valor conseguido en el arreglo
    console.log(nombre);
}

let num = 1;
while(num <= 10){
    console.log(num);
    num++;
}

let index = 0;
while(index < nombres.length){
    console.log(nombres[index]);
    index++;
}
let s = 1;
do {
    console.log(s)
    s++;
} while(s <= 10)

console.log("Sigo avanzando");