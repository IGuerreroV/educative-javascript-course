// Conversion de tipo implicita/coercion de tipo

console.log(1 + '1', typeof(1 + '1')); // Imprime un valor de cadena
console.log(null == 'null', typeof(null == 'null')); // Imprime un valor de booleano

// Conversion de tipo explicito
console.log('-------------------');
// encadenar
// a booleano
// al numero

// ENCADENAR

var num = 1 // Inicializa num en 1
var boolean = true // Inicializa boolean en true
var nul = null // Inicializa en null
var undef = undefined // Inicializa en undefined

// Conversion de tipo explicita en cadena a continuacion
var str_num = new String(num).valueOf() // Numero a string
var str_bool = new String(boolean).valueOf() // Boolean a string
var str_nul = new String(nul).valueOf() // Null a string
var str_undef = new String(undef).valueOf() // Undefined a string

// Imprime todas las variables y sus tipos despues de la cinvertion de tipo explicita
console.log('num:', str_num, ' - type:',typeof(str_num));
console.log('boolean', str_bool, ' type:',typeof(str_bool));
console.log('nul', str_nul, ' - type:',typeof(str_nul));
console.log('undef', str_undef, ' - type:',typeof(str_undef));

// a booleano
var num1 = 1 // inicializa en 1
var str = 'true' // inicializa en 'true'
var nul1 = null // inicializa en null
var undef1 = undefined // inicializa en undefined

// Conversion de tipo explicita en booleano a continuacion
var bool_num = new Boolean(num1).valueOf() // Numero a boolean
var bool_str = new Boolean(str).valueOf() // String a boolean
var bool_nul1 = new Boolean(nul1).valueOf() // Null a boolean
var bool_undef1 = new Boolean(undef1).valueOf() // Undefined a boolean

// Imprime todas las variables y sus tipos despues de la cinvertion de tipo explicita
console.log('num1:', bool_num, ' - type:',typeof(bool_num));
console.log('str:', bool_str,' - type:',typeof(bool_str));
console.log('nul1:', bool_nul1, ' - type:',typeof(bool_nul1));
console.log('undef1:', bool_undef1, ' - type:', typeof(bool_undef1));

// al numero
var str1 = '1000' // inicializa en '1000'
var boolean = true // inicializa en true
var nul2 = null // inicializa en null
var undef2 = undefined // inicializa en undefined

// Conversion de tipo explicita en numero a continuacion
var num_str = new Number(str1).valueOf() // String a numero
var num_bool = new Number(boolean).valueOf() // Boolean a numero
var num_nul = new Number(nul2).valueOf() // Null a numero
var num_undef = new Number(undef2).valueOf() // Undefined a numero

// Imprime todas las variables y sus tipos despues de la cinvertion de tipo explicita
console.log('str1:', num_str, ' - type:', typeof(num_str));
console.log('boolean:', num_bool, ' - type:',typeof(num_bool));
console.log('nul2:', num_nul, ' - type:',typeof(num_nul));
console.log('undef2:', num_undef, ' - type:',typeof(num_undef));