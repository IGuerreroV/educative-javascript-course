/* OPERADORES TERNARIOS Y CONDICIONALES

Las declaraciones condicionales ejecutan código que depende de una condición. Es común que los condicionales alteren el flujo del programa.

En el fragmento de código siguiente, asignamos 0 o 1 dependiendo de si el valor original es 0, 1 o -1. Escribimos varias líneas de código para una sola tarea, como se muestra a continuación.
*/

var variable = 0
if(variable === 0) {
    variable = 1
} else if(variabnle === -1) {
    variable = 0
} else if(variable === 1) {
    variable =0
} else {
    console.log('La variables no es 1, -1 o 0');
}
console.log('variable:',variable);

console.log('-------------------');
// OPERADORES TERNARIOS
// Los operadores ternarios son una forma de escribir declaraciones condicionales en una sola línea.

// Sintaxis
// condition ? expr1 : expr2

let variable1 = 0
if(variable1 === 0) {
    varible1 = 1
} else {
    variable1 = 0
}
console.log('variable1:', variable1);

variable1 = 0
variable1 = variable1 === 0 ? 1 : 0 // 1 si la variable1 es 0, 0 si no
console.log('variable1:', variable1);

console.log('-------------------');
// Anidamineto de condicionales y asociatividad

let variable2 = 0
if(variable2 === 0) {
    variable2 = 1
} else if(variable2 === -1) {
    variable2 = 0
} else if(variable2 === 1) {
    variable2 = 0
} else {
    variable2 = variable2
}
console.log('variable:', variable2);

variable2 = 0
variable2 =variable2 === 0 ? 1 // Si el valor es 0, se agigna 1
    : variable2 === 1 ? 0 // De lo contrario si el valor es 1, se asigna 0
    : variable2 === -1 ? 0 // De lo contrario si el valor es -1, se asigna 0
    : variable2 // Si ningun caso pasa se le asigna el valor original
console.log('variable:', variable2);

console.log('-------------------');
// Mas ejemplos
let num = -1
let incr_abs = 1 + (num < 0 ? num* -1 : num)
console.log('Incrementa el valor absoluto:', incr_abs);

let test = false
console.log(test? 'Prueba aprobada!' : 'Prueba fallida!');

let check = false
// condicion if
if(check)
    console.log('Rama verdadera');
else
console.log('Rama falsa');

// Operador ternario alternativo
check ? console.log('Rama verdadera') : console.log('Rama falsa');

// NOTA: La limitación del uso de operadores ternarios es que no puede dejar la condición else vacía. Tanto la rama verdadera como la falsa deben completarse cuando se utilizan operadores ternarios.