'uses strict'
/**
 * 1. Pida 6 numeros por pantalla y los meta en un arrar
 * 2. Mostrar el array entero (todos los elemento) en el cuerpo de la pagina y en la consola de
 * 3. Ordenarlo y mostrarlo
 * 4. Invertir su horden y mostrarlo
 * 5. mostrar cuantos elementos tiene el array
 * 6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indices
 * (se valora el uso de funciones)
 */

//var numeros = new Array(6);

function mostrarArray(elementos, textocustom = ""){
    document.write("<h1>contendio del array"+textocustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
}
// pedir 6 numeros
var numeros = [];

for(var i = 0; i <= 5; i++) {
    //numeros[i] = parseInt(prompt('introduce un numero ', 0));
    numeros.push(parseInt(prompt('introduce un numero ', 0)));
}

// mostrar en el cuerpo de la pagina 
mostrarArray(numeros);

// mostrar el array por consola 
console.log(numeros)

// Ordenarlos y mostrar
numeros.sort();
mostrarArray(numeros, "Ordenados");

// revertir orden
numeros.reverse();
mostrarArray(numeros, "Invertidos ");

// contar elemntos del array
document.write("el array tiene "+numeros.length+ " elementos ")

// Busqueda
var busqueda = parseInt(prompt('busca un numero ', 0));

var posision = numeros.findIndex(numero => numero == busqueda);

if(posision && posision != 1){
    document.write("<h1>encontrado</h1>");
    document.write("<h1>posision de la busqueda "+ posision + "</h1>");
}else{
    document.write("<h1>no encontrado</h1>");
}



