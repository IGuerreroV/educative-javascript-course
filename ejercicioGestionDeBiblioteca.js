/* Tarea
Un bibliotecario quiere que usted tome un conjunto de valores primitivos y almacene referencias a todos en un solo objeto por conveniencia. Debido a la inexperiencia con JavaScript, el bibliotecario ingresó todos los datos en tipo cadena. También tienes que cambiar los tipos en consecuencia. Utilice sus conocimientos sobre conversión de tipos para resolver el problema. */

// Ejemplo de valores iniciales como cadenas
let id = '123'; // id String
let available = 'true'; // Cadena que dice 'true' / 'false'
let count = '456'; // cuenta String
let name = 'John Doe'; // nombre String
let author = 'Jane Smith'; // autor String

// Convertir las cadenas a los tipos apropiados
id = Number(id);
available = available.toLowerCase() === 'true';
count = Number(count);
name = String(name);
author = String(author);

// Asignar los valores convertidos al objeto ans
const ans = {
  id: id,
  available: available,
  count: count,
  name: name,
  author: author,
};

console.log(ans);