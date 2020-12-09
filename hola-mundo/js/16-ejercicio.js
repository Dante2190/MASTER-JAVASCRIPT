'uses strict'

/**
 * que nos diga si un numero es par o impar
 * si no es valido que nos pida otra vez el numero 
 */

var numero1 = parseInt(prompt('Introduce  el  numero  ', 0));

while (isNaN(numero1)){
    numero1 = parseInt(prompt('introduce un numero ', 0));
}

if(numero1 % 2 == 0){
    alert('es un par ')
}else{
    alert('es impar')
}