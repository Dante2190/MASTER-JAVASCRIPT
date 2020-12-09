//operadores logicos
'uses strict'
var year = 2018;

//negacion
if(year != 2016){
    console.log("el año no es 2016 realmente es " + year);
}

//and
if(year >= 2000 && year <= 2020){
    console.log("estamos en la era actual ");
}else{
    console.log("estamos enla era pos moderna");
}

//or
if(year == 2008 || year == 2018){
    console.log("el año acaba en 8 ");
}

// condicional switch

var edad = 40;
var imprime = "";

switch(edad){
    case 18:
        imprme = "acabas de complir 18";
    break; 
    case 25:
        imprme = "ya eres adulto";
    break;
    case 40:
        imprme = "crisis de los 40";
    break;
    default:
        imprme = "tu edad es neutrar";
    break;

    
}

console.log(imprme)
    
 