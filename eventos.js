let box = document.querySelector('.box');
console.log(box);

box.addEventListener('click', () => {
    console.log('haciendo click')
}) // (event, function)

/* box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'red';
    box.style.animation = 'circleIn 1s ease';
    //box.style.borderRadius = '100%';
}) // (event, function)

box.addEventListener('mouseout', () => {
    box.style.backgroundColor = 'green';
    //box.style.borderRadius = '0';
    box.style.animation = 'circleOut 1s ease';
}) // (event, function) */

let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let ul = document.querySelector('ul') // capturamos el ul (lista)
    let li = document.createElement('li') // creamos una nueva elemento de lista
    let valor = prompt('Ingrese un lenguaje de programacion') // capturamos el valor que queremos ingresar
    let texto = document.createTextNode(valor) // creamos un nuevo elemento de texto
    li.appendChild(texto) // añadimos el texto en el elemento de lista 
    ul.appendChild(li); // añadimos el elemento de lista a la lista
})