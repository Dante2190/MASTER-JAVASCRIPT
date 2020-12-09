'uses strict'

/**
 * Muestre todos los numeros de divisores de un numero introducido en un prompt
 */

var numero1 = parseInt(prompt('Introduce  un numero  ', 0));

for(var i = 1; i < numero1; i++){
    if (numero1%i == 0) {
        console.log('Divisor' + i);
    }
}