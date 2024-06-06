/* TAREA
Un analista de datos quiere realizar operaciones matemáticas con una serie de valores. Pudo extraer múltiples operandos y etiquetarlos como operandos izquierdo y derecho . También extrajo operadores. La única tarea que queda es la operación en sí. Convirtió tipos de operandos en números, pero dejó el operador en el tipo de cadena. Tu tarea: escribir código que realice la operación matemática dependiendo del valor del operador.

Planteamiento del problema
Se le dan tres variables llamadas left_operand, right_operandy operator. Escriba código para operatorvalores para que cada valor haga lo siguiente:

'+': Agregar left_operand y right_operandasignar el resultado a ans.
'-': Resta left_operand y right_operandasigna el resultado a ans.
'*': Multiplica left_operand por right_operandy asigna el resultado a ans.
'/': Dividir left_operand con right_operandy asignar el resultado a ans.
Para cualquier otro operador , asigne NaNa ans.
Recuerde, hay muchos interrogantes sobre lo que es el operador . Encuentre una solución a todos los "si".
 */

let = left_operand = 1
let = right_operand = 2
let = operator = '+'
let = ans = 0
let all_operators = ['+', '-', '*', '/']


// USANDO CONDICIONALES IF
if(operator === '+') { // Si el operador es +, sumamos los operandos
    ans = left_operand + right_operand
} else if (operator === '-') { // Si el operador es -, restamos los operandos
    ans = left_operand - right_operand
} else if (operator === '*') { // Si el operador es *, multiplicamos los operandos
    ans = left_operand * right_operand
} else if (operator === '/') { // Si el operador es /, dividimos los operandos
    ans = left_operand / right_operand
} else { // Si el operador no es ninguno de los anteriores, asignamos NaN
    ans = NaN
}
console.log('ans:', ans);


// USANDO PERADORES TERNARIOS

ans = operator === '+' ? left_operand + right_operand // Si el operador es +, sumamos los operandos
    : operator === '-' ? left_operand - right_operand // Si el operador es -, restamos los operandos
    : operator === '*' ? left_operand * right_operand // Si el operador es *, multiplicamos los operandos
    : operator === '/' ? left_operand / right_operand // Si el operador es /, dividimos los operandos
    : NaN // Si el operador no es ninguno de los anteriores, asignamos NaN