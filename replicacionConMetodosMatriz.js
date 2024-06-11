/* Replicacion con metodos de matriz
Dado que las matrices son mutables y no se pueden copiar asignándolas a nuevas variables, copiar no es tan sencillo. Repasemos los métodos para hacerlo.
*/

// Método 1: Usando el método slice()
// El método slice() devuelve una copia superficial de una parte de una matriz en un nuevo objeto de matriz seleccionando elementos de la matriz original por rango de índices.

var arr = [1, 2, 3, 4] // Asigamos una matriz a la variable arr

// Imprime la matriz con el método slice()
console.log('Before Slice');
console.log('arr:', arr);

// Llammamos al metodo toString() para convertir la matriz en una cadena y luego imprimimos la cadena
var arr1 = arr.slice()
var arr2 = arr.slice(1)
var arr3 = arr.slice(1, 1)
var arr4 = arr.slice(0, -1)

// Imprime el tipo y los valores de arr y str_arr despues de llamar al metodo toString()
console.log('After Slice:');
console.log(`original arr: ${arr}`);
console.log('arr1:', arr1);
console.log('arr2:', arr2);
console.log('arr3:', arr3);
console.log('arr4:', arr4);

console.log('---------------------------------');
// Metodo 2: Usando el método splice()
// El método splice() cambia el contenido de una matriz eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar.

var arr5 = [1, 2, 3, 4] // Asigamos una matriz a la variable arr5

// Agregamos 0 a la lista sin eliminar ningun elemento
var add = arr5.splice(0, 0, 0)
console.log('arr5 after addition:', arr5);
console.log('element removed in addition:', add);

// Eliminamos 3 elementos del indice 1 en adelante
var remove = arr5.splice(1, 3)
console.log('arr5 after removal:', arr5);
console.log('elemetns removed in removal:', remove);

// Eliminamos 1 elemto del indice 1 y agregamos 3 elementos
var replace = arr5.splice(1, 1, 1, 2, 3)
console.log('arr5 after replacement:', arr5);
console.log('elements removed in replacement:', replace);

console.log('arr5:', arr5);

// Metodo 3: Usando el método concat()
// El método concat() se utiliza para fusionar dos o más matrices. Este método no cambia las matrices existentes, sino que devuelve una nueva matriz.

var arr6 = [1, 2, 3] // Asignamos una matriz con 3 elementos a la variable arr6
var arr7 = [4, 5] // Asignamos una matriz con 2 elementos a la variable arr7

// Imprimimos los arreglos originales
console.log('initial arrays:');
console.log(arr6);
console.log(arr7);

// Fusionamos arr6 y arr7 a la asignamos a la variable correspondiente
var merged1 = arr6.concat(arr7)
var merged2 = arr7.concat(arr6)
var merged3 = Array.prototype.concat(arr6, arr7)

// Imprimimos cada matriz fusionada
console.log('After concat:');
console.log('arr6:', arr6, 'arr7:', arr7);
console.log('merged1:', merged1);
console.log('merged2:', merged2);
console.log('merged3:', merged3);