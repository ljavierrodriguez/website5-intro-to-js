const values = [1, 2, 3, 4, 5]; // array

const [x, y, z, ...rest] = values; // x = 1, y = 2, z = 3

console.log(x)
console.log(y)
console.log(z)
console.log(rest)

const person = { // object
    first_name: 'John',
    last_name: 'Doe'
}

const { first_name, last_name } = person;

console.log(first_name)
console.log(last_name)

let val1 = 1;
let val2 = 2;

//let aux = val1;
//val1 = val2;
//val2 = aux;

[val1, val2] = [val2, val1]

console.log(val1, val2)


function sumarValores(...rest){
    return rest.reduce((total, value) => total + value, 0)
}

console.log(sumarValores(1, 2, 3, -10, 5, 20, 2, -10))

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].splice(4, 4))
                            // [S, M, 1, 2, 3...]
if("SM123J100D144".length == 13)
    console.log("SM123J100D144".split('').splice(6,3).join(''))