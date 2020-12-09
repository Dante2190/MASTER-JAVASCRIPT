// programa que pida 2 numeros y que nos diga 
// cual es el mayor y el menor que y si son iguales 
// plus si los numeros no son un numero o son menores a 0 nos los vuelva apedir


var num1 = parseInt(prompt("introduce el primer numero", 0));
var num2 = parseInt(prompt("introduce el segundo  numero", 0));

while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("introduce el primer numero", 0));
    num2 = parseInt(prompt("introduce el segundo  numero", 0));
}

if(num1 == num2){
    alert("los 2 numeros son iguales");
}else if(num1 > num2){
    alert("el numero mayor es " + num1);
    alert("el numero menor  es " + num2);
}else if(num2 > num1){
    alert("el numero mayor es " + num2);
    alert("el numero menor  es " + num1);
}else{
    alert("introduce los numeros correctamente");
}

