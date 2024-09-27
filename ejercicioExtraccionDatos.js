/* Tarea
Un cientifico de datos quiere crear un modelo en el que la entrada sea un subconjunto de datos de un conjunto de datos grande. Como está ocupado manipulando otras variables para el modelo, le pidió que realice una pequeña tarea relacionada con la extracción de datos.

Su tarea consiste en extraer un subconjunto de la matriz de una matriz bidimensional que contiene los datos almacenados . El científico de datos utilizará esa información como entrada para su modelo.
*/

var raw_array = [[200, 50, 300, 5], [10, 25, 7, 100], [25, 20, 70, 45], [500, 170, 11, 35]] // Matriz vacia
var row = 1 // Indice de la fila en el que reside la submatriz
var s = 0 // Indice inicial de la submatriz raw_array
var e = 3 // Ultimo indice de la submatriz en raw_array
ans = null // Matriz vacia

// Verifica si el índice de la fila es mayor que el número de filas en la matriz
if(raw_array.length <= row){
    ans = undefined; // Si es así, la submatriz no puede ser extraída
}
// Verifica si los índices de inicio o fin están fuera del rango de la fila seleccionada
else if(raw_array[row].length <= e || raw_array[row].length <= s){
    ans = undefined; // Si es así, la submatriz no puede ser extraída
}
// Verifica si el índice de inicio es mayor que el índice de fin
else if(s > e){
    ans = undefined; // Si es así, la submatriz no puede ser extraída
}
// Si todas las condiciones anteriores son falsas, extrae la submatriz
else{
    ans = raw_array[row].slice(s, e); // Extrae la submatriz desde el índice s hasta e (no inclusivo)
}
console.log(ans); // Imprime la submatriz extraída o undefined si no se pudo extraer
