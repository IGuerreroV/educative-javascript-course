/* Iteracion de matrices unidimensionales
Para iterar una matriz unidimensional, se puede utilizar un bucle for. Que indexara cada elemento de la matriz.
*/

let arreglo = [ 10, 25, 7, 100, 20 ];

for (let i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
}
console.log("Fin del programa");

console.log("Orden inverso:");

// Este bucle for recorre el arreglo en orden inverso, comenzando desde el último elemento hasta el primero.
for (let i = arreglo.length - 1; i >= 0; i--) {
  console.log(arreglo[i]); // Imprime cada elemento del arreglo en orden inverso
}
console.log("Fin del programa"); // Indica el final del programa

console.log("---------------------------------");

// Iterar solo indices impares

for (let i = 1; i < arreglo.length; i+=2) {
  console.log(arreglo[i]);
}
console.log("Fin del programa");

console.log("---------------------------------");

/* Iteracion de matrices multidimensionales
Para iterar una matriz multidimensional, se pueden usar bucles.
*/

const matriz = [
  [ 10, 25, 7 ],
  [ 100, 20, 53 ],
  [ 1, 12, 13 ]
];

// Iterar sobre cada fila
for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[i]);
}
console.log("Fin del programa");

// La iteracion anterior itera todos los elemetnos de matriz, el problema es que todavia no se accede a cada elemento.

for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[i][0]); // Imprime el primer elemento de cada fila
  console.log(matriz[i][1]); // Imprime el segundo elemento de cada fila
  console.log(matriz[i][2]); // Imprime el tercer elemento de cada fila
}
console.log("Fin del programa");

console.log("---------------------------------");

// Iterar sobre cada elemento de la matriz usando dos bucles for anidados
for (let i = 0; i < matriz.length; i++) { // Itera sobre cada fila de la matriz
  // 'i' es el índice de la fila actual, que va desde 0 hasta el número de filas - 1
  for (let j = 0; j < matriz[i].length; j++) { // Itera sobre cada elemento de la fila actual (índice i)
    // 'j' es el índice del elemento dentro de la fila actual, que va desde 0 hasta el número de elementos en la fila - 1
    console.log(matriz[i][j]); // Imprime cada elemento de la matriz en la posición [i][j]
  }
  console.log("Fin de la fila"); // Indica el final de la iteración de la fila actual
}

console.log("---------------------------------");

// Metodo forEach para iterar sobre cada fila de la matriz

// La función de flecha se ejecuta para cada fila de la matriz y muestra la fila en la consola.
matriz.forEach(fila => console.log(fila));
console.log("Fin del programa");