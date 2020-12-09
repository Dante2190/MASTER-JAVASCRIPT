// Modo estricto
'use strict'

// prueba con var
// las varibles definidas con var se le puede cambiar su valor 

var numero = 40;
console.log(numero);//40

if(true){
    var numero = 50;
    console.log(numero)//50
}

console.log(numero);//50

// prueba con let, esta variable solo funciona dentro del bloque de 
// codigo que declaro 
let pais = "elsalvador";

// constantes su valor nunca va cambiar 

const hola = "hola";

console.log(hola)