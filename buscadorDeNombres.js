/* Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array 

1.1-Comprueba si existe el elemento

1.2- en caso que existan nos devuelve un true y
1.3 la posición de dicho elemento 

2- y por la contra un false.

 */

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

/* Aquí es donde selecciono una palabra concreta y la función me la busca */
let tryWord = 'Petddder';

function finderName(tryWord) {

    /* pido que me compruebe si inlcuye la palabra */
    if (nameFinder.includes(tryWord)) {

        return true;

    } else {
        console.log("No Existe, intenalo de nuevo");
    }
}
/* 
muestra si existe */
alert(finderName(tryWord));
/* muestra su ubicación  */
alert(nameFinder.indexOf(tryWord));