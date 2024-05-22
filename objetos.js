var obj = {} // Declarar un objeto vacío
// Imprime valor y tipo de objeto
console.log('Our object is:', obj);
console.log('Type of our object is:',typeof(obj));

// AGREGAR Y MODIFICAR PROPIEDADES DE OBJETOS

// Declare un objeto con propiedad 'name' y valr 'obj'
var obj1 = {name : 'obj', 'age': 20}
// Definir propiedades y asignar valores usando notacion de punto
obj1.number = 13
// Definir propiedades y asignar valores usando notacion de corchetes
obj1['obj2'] = {}
// Imprime valor y tipo de objeto
console.log('Our object:',obj);
console.log('Type of our object;',typeof(obj));

console.log('---------------------------------');
// ACCEDER A PROPIEDADES DE OBJETOS
var obj2 = {name: 'obj', number: 13, obj2: {} } // Declare un objeto con propiedades
var num_obj = obj2['number']
var name = obj2.name
// Imprime valor y tipo de objeto
console.log('Our object:', obj2);
console.log('Type of our object:',typeof(obj2));
// Imprime number de obj2
console.log(`obj['number]: ${obj2['number']} , ${num_obj}`);
// Imprime name de obj2
console.log(`obj2.name: ${obj2.name}, ${name}`);
// Imprime el tipo de propiedad
console.log(`Types: ${typeof(obj2['number'])}, ${typeof(num_obj)}`);
console.log(`Types: ${typeof('name')}, ${typeof(name)}`);

console.log('---------------------------------');
// MUTABILIDAD DE OBJETOS
// Modificar una propiedad existente
obj2.name = 'new name';
// Agregar una nueva propiedad
obj2.newProperty = 'new value';
// Imprime el objeto modificado
console.log('Modified object:', obj2);

console.log('---------------------------------');
//OTROS OBJETOS
// fecha

var obj3 = new Date() // Crear fecha y se asigna a obj3

console.log(obj3); // Imprime obj3
console.log(obj3.getFullYear()); // Imprime el año de obj3

console.log('---------------------------------');
// MATRICES

var arr1 = new Array(1,2,'hello') // Crear un objeto Array y asignar a arr1
var arr2 = ['hello',2,1]
// Imprime arr1 y arr2
console.log('arr1:', arr1);
console.log('arr2:', arr2);
console.log(`Type of arr1: ${typeof(arr1)} and arr2: ${typeof(arr2)}`);
// Algunas propiedades de matriz en accion
arr2.sort() // Ordenar la matriz
console.log('sorted arr2:', arr2);
console.log('Lenght of arr2:', arr2.length); // Imprime la longitud de la matriz