/* DECLARACION Y MUTACION DE MATRICES */

// DECLARACION DE MATRICES
var arr = new Array(); // Asignar arr a un objeto vacío
var arr2 = [] // Asignar arr2 a un objeto vacío
var arr3 = new Array(12) // Asignar arr3 a un objeto con 12 elementos vacíos
console.log(arr, arr2, arr3);

console.log('-------------------------');
// DECLARACION DE MATRICES CON ELEMENTOS
var arr4 = new Array(1, -2, '3') // Cree un array con 3 elementos
var arr5 = [4, 5, '6', true] // Cree un array con 3 elementos
console.log(arr4, arr5);

console.log('-------------------------');
// Accediento a elementos de una matriz
var arr6 = [1, 2, 3, 4] // Cree un array con 4 elementos
var firts = arr6[0] // Acceda al primer elemento de la matriz arr6
var last = arr6[3] // Acceda al ultimo elemto de la matriz arr6
console.log(arr6,firts, last);

console.log('-------------------------');
// MUTACION DE MATRICES
var arr7 = [1, 2, 3, 4]
console.log(arr7);
arr7[0] = 5 // Cambie el primer elemento de la matriz arr7 a 5
console.log(arr7);

console.log('-------------------------');
var arr8 = [1, 2, 3, 4] // Cree un array con 4 elementos
var arr9 = arr8 // Asigne arr8 a arr9
arr9[0] = 5 // Aztualizamos el primer elemento de la matriz arr9 a 5
console.log(arr8, arr9);

//COPIANDO UNA MATRIZ
console.log('-------------------------');
var arr10 = [1, 2, 3, 4] // Cree un array con 4 elementos
var arr11 = arr10.slice() // Copie arr10 en arr1
var arr12 = [...arr10] // Copie arr10 en arr2
var arr13 = Array.from(arr10) // Copie arr10 en arr3
arr11[0] = 5 // Actualice el primer elemento de la matriz arr10 a 5
arr12[0] = 6 // Actualice el primer elemento de la matriz arr10 a 6
arr13[0] = 7 // Actualice el primer elemento de la matriz arr10 a 7
console.log(arr10, arr11, arr12, arr13); // Imprime los arrays

// METODOS Y  PROPIEDADES DE LAS MATRICES
// LENGTH
console.log('-------------------------');
var arr14 = [1, 2, 3, 4, 5] // Cree un array con 5 elementos
var arr15 = new Array(100) // Cree un array con 100 elementos
var arr16 = new Array(9, 10) // Cree un array con 2 elementos
console.log(`arr14 size:`, arr14.length); // Imprime el tamaño de la matriz arr14
console.log(`arr15 size`, arr15.length); // Imprime el tamaño de la matriz arr15
console.log(`arr16 size`, arr16.length); // Imprime el tamaño de la matriz arr16

// PROTOTYPE
var arr17 = [1, 2, 3] // Asignamos arr17 a un array con 3 elementos
var arr18 = new Array() // Asignamos arr18 a un array vacío
// Imprime Array.prototype antes de agregar cualquier prototype
console.log(`Initial Array.prototype:`, Array.prototype);
// Agregamos la propiedad lol a Array.prototype
Array.prototype.lol = 'Ha Ha Ha'
// Agregamos la propiedad looooool a Array.prototype
Array.prototype.looooool = 'Muahahahahaha'

// Imprime Array.prototype para ver su valor después de agregar propiedades
console.log(`New Array.prototype:`, Array.prototype);
// Imprime Arrar.lol para ver si lol es una propiedad de Array

// Imprime lol and looooool propiedades de arr17
console.log('arr17.lol :', arr17.lol,'| arr17.looooool:', arr17.looooool);
// Imprime arr17 directamente
console.log('ar17:', arr17);

console.log(`\narr18:`);
// Impime lol and looooool propiedades de arr18
console.log('arr18.lol :', arr18.lol,'| arr18.looooool:', arr18.looooool);
// Imprime arr18 directamente
console.log('arr18:', arr18);

console.log('-------------------------');
// METODOS DE LAS MATRICES
var arr19 = [1, 2, 3, 4] // Asignamos arr19 a un array con 4 elementos
// Imprime el array y el tamaño del array
console.log(`arr19 length:${arr19.length}`);
console.log(`arr19:`, arr19, `\n`);

var push = arr19.push(20) // Insertamos 20 a el final de la matriz arr19
console.log(`arr19 length:`, arr19.length, `push value:`, push);
console.log(`arr19:`, arr19, `\n`);

var pop = arr19.pop() // Eliminamos el ultimo elemento de la matriz arr19
// Imprime el array y el tamaño del array
console.log(`arr19 length:`, arr19.length, `pop values:`, pop);
console.log(`arr19:`, arr19, `\n`);


// unshift y shift
var arr20 = [1, 2, 3, 4] // Asignamos arr20 a un array con 4 elementos
// Imprime el array y el tamaño del array
console.log(`arr20 length:${arr20.length}`);
console.log(`arr20:`, arr20, `\n`);

var unshift = arr20.unshift(20) // Insertamos 20 al principio de la matriz arr20
// Imprime el array y el tamaño del array
console.log(`arr20 length:`, arr20.length, `unshift valueL`, unshift);
console.log(`arr20:`, arr20, `\n`);

var shift = arr20.shift() // Eliminamos el primer elemento de la matriz arr20
// Imprime el array y el tamaño del array
console.log(`arr20 length:`, arr20.length, `shift value:`,shift);
console.log(`arr20:`, arr20, `\n`)

// toString

var arrr = [1, 2, 3, 4] // Asignamos arrr a un array con 4 elementos

// Imprime la matriz junto con su tipo
console.log('arrr:',arr,'arrr type:', typeof arrr);

// Llamamos al metodo toString en la matriz arrr
var str_arr = arrr.toString()

// Imprime el tipo y los valores de arrr y str_arr despues de llamar al metodo toString
console.log('arr type:',typeof arrr,'str_arr type:',typeof str_arr);
console.log('arr:', arrr,'str_arr:',str_arr);