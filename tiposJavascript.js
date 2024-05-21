var bool_true = true // Inicializa variable a true
var bool_false =new Boolean(false) // Inicializa variable a false
// Imprime valores
console.log('The values are:', bool_true,bool_false);
// Imprime tipo de variable
console.log('The types are:', typeof(bool_true),typeof(bool_false));

var bool_true1 = 1 == 1 // Inicializa variable a true
var bool_false1 = 1 != 1 // Inicializa variable a false
console.log('The values are:', bool_true1,bool_false1);
// Imprime tipo de variable
console.log('The types are:',typeof(bool_true1),typeof(bool_false1));

var num1 = 120 // Inicializa variable a 120
var num2 = new Number(0.002) // Inicializa variable a 0.002
// Imprime valores
console.log('The values are:',num1,num2);
// Imprime tipo de variable
console.log('The types are:',typeof(num1),typeof(num2));

var num3 = 10e5 // Inicializa la variable a 10^5
var num4 = new Number(2e-3) // Inicializa la variable a 2*10^-3
// Imprime valores
console.log('The values are:',num3,num4);
// Imprime tipo de variable
console.log('The types are:',typeof(num3),typeof(num4));

var num5 = null // Inicializa la variable a null
// Imprime vaalores
console.log('The values are:',num5);
// Imprime tipo de variable
console.log('The types are:',typeof(num5));

var num6 // Inicializa la variable a undefined
var num7 = undefined // Inicializa la variable a undefined
// Imprime valores
console.log('The values are:', num6,num7);
// Imprime tipo de variable
console.log('The types are:',typeof(num6),typeof(num7));

var str1 = 'String-1' // Inicializa la variable a 'String-1'
var str2 = new String('String-2') // Inicializa la variable a 'String-2'
var str3 = new String(1234) // Inicializa la variable a '1234'
// Imprime valores
console.log('The values are:',str1,str2,str3);
// Imprimes tipo de variable
console.log('The types are:',typeof(str1),typeof(str2),typeof(str3));

// Enfoque tradicional
// 'this is ' + variable

// enfoque alternativo usando comillas invertidas
// 'this is ${variable}'

// Inicializa expresion str1_2 a 'str1:str1 and str2:str2
var str1_2 = `str1:${str1} and str2:${str2}`
// Inicializa expresion a 'Total strings:2'
var expression = `Total strings:${1+1}`
// Imprime valores
console.log(str1_2);
console.log(expression);
// Imprime tipo de variable
console.log('The types are:',typeof(str1),typeof(str2),typeof(str1_2));

var sym1 = Symbol() // Inicializa variable a Symbol
var sym2 = Symbol() // Inicializa variable a Symbol
// Imprime valores
console.log('The values are:',sym1,sym2);
// Immprime tipo de variable
console.log('The types are:',typeof(sym1),typeof(sym2));
// Imprime si son iguales
console.log('Are they equal?',sym1 == sym2, sym1 === sym2);