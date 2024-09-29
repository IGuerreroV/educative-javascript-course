/* Romper y continuar en Bucles
En JavaScript, puedes usar las palabras clave break y continue para controlar el flujo de un bucle.

Puedes usar declaraciones para omitir una iteracion o salir del bucle usando declaraciones continue o break.
*/

// Ejemplo de Continue

for (let i = 0; i < 5; i++) {
  console.log("Iteración", i); // Muestra el valor de i
  continue; // Continua con la siguiente iteración
  console.log("Este mensaje no se mostrará"); // No se mostrará
}

console.log("Programa terminado"); // Muestra el mensaje "Programa terminado"

console.log("---------------------------------");

// Otro ejemplo

for(let i2 = 0; i2 < 10; i2++) {
  if(i2 % 2 === 0) { // Si i2 es par
    continue; // Salta a la siguiente iteración
  }
  console.log("i2 valor", i2); // Muestra el valor de i2 si es impar
}

console.log("Programa terminado"); // Muestra el mensaje "Programa terminado"

console.log("---------------------------------");

// Ejemplo de Break

for (let i3 = 0; i3 < 5; i3++) {
  console.log('Iteración #', i3+1); // Muestra el valor de i3
  break; // Sale del bucle
  console.log("Este mensaje no se mostrará"); // No se mostrará
}

console.log("Programa terminado"); // Muestra el mensaje "Programa terminado"

console.log("---------------------------------");

// Otro ejemplo

console.log("Bucle para imprimir todos los números del 0 al 9 o hasta alcanzar un multiplo de 7");

for (let i4 = 0; i4 < 10; i4++) {
  if (i4 % 7 === 0 && i4 !== 0) { // Si i4 es multiplo de 7 y no es 0
    break; // sale del bucle
  }
  console.log("i4 valor", i4); // Muestra el valor de i4
}
console.log("Programa terminado"); // Muestra el mensaje "Programa terminado"