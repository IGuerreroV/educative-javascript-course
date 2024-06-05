let bin = 0
console.log('valor inicial:',bin);
bin = 1 - bin
console.log('valor nuevo:',bin);
bin = 1 - bin
console.log('valor nuevo:',bin);
bin = 1 - bin
console.log('valor nuevo:',bin);
console.log('-------------------');
// CARACTERISTICAS CONDICIONALES
// Una condicion puede ser true o false

// Palabras clave y semantica
// if condicion if(condicion) {bloque de codigo}
var variable = 0
if(variable === 0){
    variable = 1
}
console.log('variable:',variable);
if(variable === -1){
    variable = 0
}
if(variable === 1){
    variable = 0
}
console.log('variable:',variable);

// else if y else
// if(condition1) {
//      // ejecuta las instruciones
// } else if (condition2) {
//     // ejecuta las instruciones
// } else {
//     // ejecuta las instruciones
// }

// Ejemplo
var variable1 = 0
if(variable1 === 0) {
    variable1 = 1
} else if(variable1 === -1) {
    variable1 = 0
} else if(variable1 === 1) {
    variable1 = 0
} else {
    console.log('La variable1 no es 1, -1 o 0');
}
console.log('varibale:', variable1);