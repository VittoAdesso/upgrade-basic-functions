/* Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función: */

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];


let word = "";
let sum = 0;

mixedElements.forEach(function(index) {
    if (isNaN(index)) {
        word += index;

    } else {

        sum += index;

    }
});
console.log(word + ' ' + 'y la' + ' ' + 'longitud de array' + ' ' + mixedElements.length);
console.log(sum);