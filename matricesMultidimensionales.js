/* Matrices Multidimensionales
Anteriormente vimos matrices unidimensionales que contenian elementos de varios tipos o del mismo tipo. Ahora veremos matrices multidimensionales que contienen matrices como elementos. */

var arr = [1, 2, 3, 4] // Matriz unidimensional
console.log("arr:", arr, "arr length:", arr.length);

// Que sucede si insertamos esta matriz en una nueva matriz vacia?
var new_arr = []
new_arr.push(arr) // Insertamos la matriz arr en la matriz new_arr
// Esto crea una matriz multidimensional con una dimension de 1x4
console.log("new_arr:", new_arr, "new_arr length:", new_arr.length);

console.log('----------------------------------------------');

// Ejemplo mas complejo
var arr1 = []; // Matriz vacia
arr1.push(new Array(2)) // Insertamos una matriz de 2 elementos en la matriz arr1
arr1.push(new Array(2)) // Insertamos otra matriz de 2 elementos en la matriz arr1

// Imprimir la matriz arr1
console.log("arr1:", arr1);
// Imprimir la longitud de la matriz arr1
console.log("dimension externa:", arr1.length);
// Imprimir la longitud de cada elemento de la matriz arr1
console.log("dimension interna:", arr1[0].length, arr1[1].length);

console.log('----------------------------------------------');

// Para visualizar el funcionamiento de una matriz multidimensional, trabajamos con una matriz bidiensional de 2x2
var arr2 = [["Car", 2000], ["Truck", 500], ["Bike", 6500]]
console.log(arr2);

// Para acceder al elemento "Car" de la matriz arr2, accedemos al primer indice de la columna 0 y al indice de la fila 0
console.log('Acceso "Carro":');
console.log("arr2[0][0]:", arr2[0][0]); // Accedemos al elemento "Car" de la matriz arr2
console.log("Acceso 500:");
console.log("arr2[1][1]:", arr2[1][1]); // Accedemos al elemento 500 de la matriz arr2

console.log('----------------------------------------------');

// Para agregar una fila nueva, agregamos otra matriz a la matriz arr2
var new_row = ["Scooter", 1500] // Creamos una nueva matriz con 2 elementos
console.log("Nuevo elemento:", new_row); // Imprimimos la nueva matriz

arr2.push(new_row) // Agregamos la nueva matriz a la matriz arr2
console.log("Actualizacion de arr2:", arr2); // Imprimimos la matriz arr2 actualizada

console.log('----------------------------------------------');

// Agregar una columna nueva
// Para agregar una columna nueva, recorremos la matriz arr2 y agregamos un elemento a cada matriz
var row0_col = ["Toyota", "Nissan"]
var row1_col = ["Ford"]
var row2_col = ["Honda"]
// Agregamos un elemento a cada matriz
arr2[0].push(row0_col)
arr2[1].push(row1_col)
arr2[2].push(row2_col)

console.log("Nuevo array con columnas:", arr2) // Imprimimos la matriz arr2 con las columnas nuevas

// console.log(arr2[0][2]);