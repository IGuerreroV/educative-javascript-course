// Ejercicio 2: Un matematico nos pidio ayuda. Necesita ayuda para traducir sus ecuaciones en javascript. Cada vez que intenta hacerlo, el codigo da un resultado incorrecto. Ayudalo a corregir su codigo.

// DECLARACIONES DEL PROBLEMA
// En este ejercicio, convertira una serie de problemas planteados o ecuaciones en codigo javascript. Tenga en cuenta precedencia y las reglas de asociatividad de los operadores.

// P1. Duplica la suma
// Para 2 variables, x e y, encuentre el doble del valor de la suma de las dos variables.

x = 1
y = 2
ans = (x + y) * 2; // Debe ser 6

console.log(ans);

// P2. Agrega el resto
// Para un valor determinado, encuentre su resto dividiendolo por 10 y sumelo a su valor original.

ans = 1;
resto = ans % 10;
ans = ans + resto; // Debe ser 2

// P3. Sigue multiplicando
// Para los valores x y n, encuentre el valor resultante cuando x se multiplica por su valor original n veces

x = -1;
n = 2;
ans = x**n; // Debe ser 1

// P4. Dividiendo el producto
// Para cierto valor a, dividalo por el producto de x, y y z. x es la suma de a y 10. y es la diferencia entre a y 10. por ultimo, z es el resto cuando a se divide por 10.

ans = ans
x = a + 10
y = a  - 10
z = a % 10

producto = x * y * z

ans = a / producto

console.log(ans);