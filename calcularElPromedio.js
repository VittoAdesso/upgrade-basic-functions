/* Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función: */

//  Calcular un promedio 
// declaro const con array dentro 
const numbers = [12, 21, 38, 5, 45, 37, 6]; // 164 acumulado // 7 items/posiciones
// declaro constante nueva que me dará la suma de lo que tengo dentro del array, ebitando las separaciones, el reduce me ayuda a unificarllo en un sólo elemento
const sumaNumbers = numbers.reduce((acumula, posicion) => acumula + posicion); // en parámetros puedo darle el nombre que quiera
// declaro nueva const que daré valor , y donde quiero que me de el promedio de la suma del array/el numeros de items.
const average = sumaNumbers / numbers.length;

console.log(average); // 23.42 // me da ok



const numbers = [12, 21, 38, 5, 45, 37, 6]; // 164 acumulado // 7 items/posiciones
// vopy al grano y creo de una vez la const con el average que busco
const average = numbers.reduce((count, item) => count + item / numbers.length, 0); // , 0 porque comienza a contar desde 0 
console.log(average); // 23.42 // me da ok


const numbers = [12, 21, 38, 5, 45, 37, 6]; // 164 acumulado // 7 items/posiciones
// declaro constante nueva que me dará la suma de lo que tengo dentro del array, ebitando las separaciones, el reduce me ayuda a unificarllo en un sólo elemento
const average = numbers.reduce((acumula, posicion) => acumula + posicion / numbers.length, 0); // en parámetros puedo darle el nombre que quiera

console.log(average); // 23.42 // me da ok