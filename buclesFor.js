/* Bucles For
Los bucles for permiten realizar una cierta cantidad de iteraciones. La cantidad de iteraciones se define en la definición del bucle.

La estructura de un bucle for es la siguiente:

for (inicialización; condición; iteración) {
  // Código a ejecutar
}

*/

// Ejemplo de bucle for
for (let i = 0; i < 5; i++) {
  console.log(i); // Muestra el valor de i
}

console.log("---------------------------------");

// Otro ejemplo si eliminamos las declaraciones opcionales
let i2 = 0; // Inicialización
for (; i2 < 5;) {
  console.log(i2++); // Muestra el valor de i
}

console.log("---------------------------------");

// Otra variante de bucle for

let i3 = 0; // Inicialización
let cuenta = 0; // Inicializa la variable cuenta
for (name = 'i3', loop = 'loop'; i3 < 5; i3+=2, cuenta++) {
  console.log(name, loop, i3); // Muestra name, loop e i3
}

console.log("Valor de cuenta:", cuenta); // Muestra el valor de la variable cuenta