/* Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  
 */
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];


let countedNames = counterWords.reduce(function(allNames, name) { /* acumulador y el actual indice  */

    /* operador ir me ayuda  adecir == si existe en el indice un valor igual al acumulado */
    if (name in allNames) {
        /* me cuentas las veces que lo encuentras en cada vuelta */
        allNames[name]++
    } else {
        /* sino encuentras coincidencia , simplemente me pones 1 */
        allNames[name] = 1
    }
    return allNames;
}, {})

console.log(countedNames);