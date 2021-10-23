/* Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función: */

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];


const removeDuplicates = duplicates.reduce(function(acumulado, actual) {
    if (acumulado.indexOf(actual) === -1) {
        /* si en el acumulado te encuentras un string igual, elimina, el reesto empuja al nuevo array  */
        acumulado.push(actual);
    }
    /* lo que quiero que ,e devuelva una vez la llame , acumulado es lo que contiene el nuevo array  */
    return acumulado;
    /* para que me devuelva un array  */
}, [])

console.log(removeDuplicates);