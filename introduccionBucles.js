/* Bucles
Hay ciertas partes de un programa en las que es necesario repetir una instruccion o un conjunto de instrucciones. Ejemplo el siguiente codigo:
*/

let first = 0; // Inicializa la variable first con el valor 0
let second = 1; // Inicializa la variable second con el valor 1
let temp = NaN; // Variable temporal para intercambiar


// Calcula el tercer numero de la serie de Fibonacci
temp = second; // Guarda el valor de second en temp
second = first + second; // Suma first y second y guarda el resultado en second
first = temp; // Guarda el valor de temp en first

// Calcula el cuarto numero de la serie de Fibonacci
temp = second; // Guarda el valor de second en temp
second = first + second; // Suma first y second y guarda el resultado en second
first = temp; // Guarda el valor de temp en first

// Calcula el quinto numero de la serie de Fibonacci
temp = second; // Guarda el valor de second en temp
second = first + second; // Suma first y second y guarda el resultado en second
first = temp; // Guarda el valor de temp en first

console.log(`first: ${first}, second: ${second}`); // Imprime los valores de first y second

// Los bucles son instrucciones que nos permiten repetir un conjunto de instrucciones mientras se cumple una determinada condición . Aprovechan la similitud y la repetibilidad de las operaciones para escribir código conciso .
