'uses strict'
// Document Object Model es todas la estructura de las etiquetas html


// acceder a un elemento del html por el id concreto 
//var caja = document.getElementById("miCaja");

function cambiarColor(color){
    caja.style.background = color;
}

// querySelector otra forma de acceder a los elemento del html
var caja = document.querySelector("#miCaja");

// cambiar el texto de la caja 
caja.innerHTML = "TEXTO DESDE JS";

// cambiar el color de fondo caja
caja.style.background = "red";

// Conseguir elementos por su etiqueta 
var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);


// Conseguir elementos por su clase css





