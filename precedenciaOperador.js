var var1 = 1 + 2 * 3; // Alcamecanr la solucion aritmetica en var1
console.log("var1:",var1); // Imprime  valor var1

var var2 = 1 + 2 + 3 // Almacenar la solucion aritmetica en var2
console.log("var2:",var2); // Imprime valor var2


// ASOCIATIVIDAD DE OPERADORES

// La asociatividad de los operadores es la direccion en la que se evaluan los operadores

var var3 = 1 + 5 +8 // Operadores de izquierda a derecha

var var4 = 1 + 2 - 3 // Operadores de izquierda a derecha

// TABLA DE PRECEDENCIA Y ASOCIATIVIDAD DE OPERADORES

// 12 (..) n / A
// 11 ..++, ..-- n / A
// 10 !.., ++.., --.. asociativo de derecha
// 9 ..**.. asociativo de derecha
// 8 ..*.., ../.., ..%.. asociativo de izquierda
// 7 ..+.., ..-.. asociativo de izquierda
// 6 ..<.., ..<=.., ..>.., ..>=.. asociativo de izquierda
// 5 ..==.., ..===.., ..!=.., ..!==.. asociativo de izquierda
// 4 ..&&.. asociativo de izquierda
// 3 ..||.. asociativo de izquierda
// 2 ..?..:.. asociativo de derecha
// 1 ..=.., ..+=.., ..-=.., ../=.., ..*=.., ..%=.. asociativo de derecha

var var5 = 2 + 4 * 3 % 5 - 1 * 6 / (1 + 1) // Almacenar valor calculado en var5
console.log("var5:", var5); // Imprimir valor de var5

var var6 = 2 ** 1 ** 3 // Almacenar valor calculado en var6
console.log("Var6:",var6); // Imprimir valor de var6