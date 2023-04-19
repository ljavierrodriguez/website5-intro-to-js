/*
DOM = Document Model Object

document.getElementById('id')
document.getElementsByClassName('class')
document.getElementsByTagName('tag')

document.querySelector('#title')
dodument.querySelectorAll('.box')
document.querySelector('.box')

document.createElement('tag')
document.createTextNode('texto')

BOM = Browser Object Model

alert(mensaje)
confirm(titulo, texto)
prompt(mensaje) = captura un valor

*/

console.log(document.body);

let title = document.getElementById('title');
title.style.backgroundColor = "red";

console.log(title);

let boxes = document.getElementsByClassName('box');
console.log(boxes);


let uls = document.getElementsByTagName('ul');

console.log(uls);

let lis = document.getElementsByTagName('li');

console.log(lis);

let lis2  = document.querySelectorAll('.menu li')

console.group(lis2)


let h1 = document.createElement('H1');

h1.innerHTML = "Hola Mundo";

document.body.appendChild(h1)

let li = document.createElement('li'); // creando un li
let texto = document.createTextNode('Hola Jack') //creando un texto
//li.innerText = "Hola Jack"; //
li.appendChild(texto); // insertando el texto en el li

let menu = document.querySelector('.menu');
menu.appendChild(li);

// mostrar
//alert('Hola Jack desde Javascript')

// Eliminar
/* let eliminar = confirm('Desea realmente borrar este registro')
if(eliminar){
    alert('registro eliminado')
} else {
    alert('Has cancelado el eliminar')
}

let tuNombre = prompt('Nombre', 'Ingresa tu nombre')
let tuEdad = prompt('Edad', 'Ingresa tu edad')

alert("Hola, " + tuNombre +  ", tu edad es: " + tuEdad) */
