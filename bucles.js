/* Bucles
Los bucles necesitan una condicion dependiente ya que continuan iterando el mismo conjunto de instrucciones hasta que la condicion falla.

Caracteristicas de los bucles:
- Una condicion que se evalua como verdadera o falsa.
- Un bloque de codigo que se ejecuta mientras la condicion es verdadera.
*/

// Bucle while
var cuenta = 0; // Inicializa la variable cuenta
while(cuenta < 5) {
  console.log("cuenta:", ++cuenta); // Incrementa la variable cuenta
}

console.log("El programa ha terminado:", cuenta); // Muestra el valor de la variable cuenta

/* Tipos de bucles
- Bucle while: Se ejecuta mientras la condicion es verdadera.
- Bucle do while: Se ejecuta al menos una vez y luego se repite mientras la condicion es verdadera.
- Bucle for: Se ejecuta un numero especifico de veces.
- Bucle for in: Se utiliza para iterar sobre las propiedades de un objeto.
- Bucle for of: Se utiliza para iterar sobre los valores de un objeto iterable.
- Bucle forEach: Se utiliza para ejecutar una funcion una vez por cada elemento en un array.
*/