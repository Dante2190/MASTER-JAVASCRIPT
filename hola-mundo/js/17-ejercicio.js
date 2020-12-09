'uses strict'

// tabla de multiplicar de un numero introducido por pantalla de

var numero1 = parseInt(prompt('Introduce  el  numero  ', 1));

document.write("<h1>tabla del "+numero1+"</h1>");
for (var i = 1; i <= 10; i++) {
    document.write(i+ " x " + numero1 + "="+(i*numero1)+"<br/>");
}

// todas las tablas

for(var c = 1; c <= 10; c++) {
    document.write("<h1>tabla del "+c+"</h1>");
    for (var i = 1; i <= 10; i++) {
    document.write(i+ " x " + c + "="+(i*c)+"<br/>");
}
}

