var var1 = 1 // Guardar valor 1 en var1
var var2 = 1 // Guardar valor 2 en var2
var var3 = '1' // Guardar caracter 1 en var3
var var4 = 2 // Guardar valor 2 en var4

console.log('is 1 aqual to 1 ? :', var1 == var2);
console.log("is 1 equal to '1' ? :", var1 == var3);
console.log("is 1 not equal to 1 ? :", var1 != var2);
console.log("is 1 not equal to 2 ? :", var1 != var4);
console.log("is 2 greater than 1 ? :", var4 >= var2);
console.log("is 1 greater than or equal to 1 ? :", var1 >= var2);
console.log("is 1 lesser than 2 ? :", var1 < var4);
console.log("is 1 lesser than or equal '1' ? :", var1 < var3);


console.log("is 1 strict equal to 1 ? :", var1 === var2);
console.log("is 1 strict equal to '1' ? :", var1 === var3);
console.log("is 1 strict not equal to 1 ? :", var1 !== var2);
console.log("is 1 strict not equal to 2 ? :", var1 !== var4);