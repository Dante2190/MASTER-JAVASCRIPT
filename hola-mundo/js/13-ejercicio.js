/**
 * 
 * HAcer un programa que muestre todos los numeros entre 2 numero introducidos por el usuario de
 * 
 */

var numero1 = parseInt(prompt('Introduce  el primer numero  ', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero  ', 0));

document.write("<h1> de "+numero1+" a "+numero2+" estan estos numeros </h1>");

for(var i = numero1; i <= numero2; i++){
    document.write(i + "<br/>");
}
