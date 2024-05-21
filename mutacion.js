/* Mutacion
La mutacion de variable consiste en reasignar una variable a otro valor. Esto se hace simplemente con el operador de asignacion */

var variable_1 = 500 // Inicialice variable_1 con valor 500
console.log('variable_1:', variable_1); // Imprimir variable_1
variable_1 = 123 // Reasignar variable_1 a 123
console.log('variable_1:', variable_1); // Imprimir variable_1

// Copiar valores de una variable a otra. Podemos usar valores a traves de varibales y asignarlos a otras variables

var variable1 = 100;
var variable2 = 200;
var variable3 = variable1 // Asignar valor de variable1 a variable3

console.log('variable1;', variable1); // Imprimir variable1
console.log('variable2:', variable2); // Imprimir variable2
console.log('variable3:', variable3); // Imprimir variable3

variable1 = variable2 // Asignar valor de variable2 a variable1
variable2 = 500
console.log('Valores despues de las actualizaciones');
console.log('variable1:',variable1); // Imprimir valor variable1
console.log('variable2:',variable2); // Imprimir valor variable2
console.log('variable3:',variable3); // Imprimir valor variable3