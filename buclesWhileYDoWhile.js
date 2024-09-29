/* While bucles */

// Bucle while
var cuenta = 0; // Inicializa la variable cuenta
while (cuenta < 5) {
  console.log("Cuenta", ++cuenta); // Incrementa la variable cuenta
}

console.log("El programa ha terminado:", cuenta); // Muestra el valor de la variable cuenta

console.log("---------------------------------");

// Bucle do while condicion diferente

var cuenta1 = 0; // Inicializa la variable cuenta1
var debeFuncionar = true; // Inicializa la variable debeFuncionar

while (debeFuncionar === true) {
  console.log("Cuenta1", ++cuenta1); // Incrementa la variable cuenta1
  if(cuenta1 === 5) { // Si la variable cuenta1 es igual a 5
    debeFuncionar = false; // Cambia el valor de la variable debeFuncionar a false
  }
}

console.log("El programa ha terminado:", cuenta1); // Muestra el valor de la variable cuenta1

console.log("---------------------------------");

/* Bucles do while
Se ejecuta al menos una vez y luego se repite mientras la condicion es verdadera.
*/

var cuenta2 = 0; // Inicializa la variable cuenta2

do {
  console.log("Cuenta2", ++cuenta2); // Incrementa la variable cuenta2
} while (cuenta2 < 5)

  console.log("El programa ha terminado:", cuenta2); // Muestra el valor de la variable cuenta2

  console.log("---------------------------------");

  // Otro ejemplo

  var cuenta3 = 100; // Inicializa la variable cuenta3

  // bucle while
  while (cuenta3 < 5) {
    console.log("Cuenta3 en while", cuenta3); // Muestra el valor de la variable cuenta3
  }

  // Mismo bucle con do while

  do {
    console.log("Cuenta3 en do while", cuenta3); // Muestra el valor de la variable cuenta3
  } while (cuenta3 < 5)

    console.log("El programa ha terminado:", cuenta3); // Muestra el valor de la variable cuenta3