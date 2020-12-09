'uses strict'

// JSON 
/**
 * (acrónimo de JavaScript Object Notation, «notación de objeto de JavaScript»)
 *  es un formato de texto sencillo para el intercambio de datos. Se trata de un subconjunto 
 * de la notación literal de objetos de JavaScript, aunque, debido a su amplia adopción como 
 * alternativa a XML, se considera (año 2019) un formato independiente del lenguaje.
 */

window.addEventListener("load", function(){
    var pelicula = {
        titulo: 'batman vs superman',
        year: '2017',
        pais: 'estados unidos'
    };
    
    var peliculas = [
        {titulo: 'la verdad duel', year: '2018',pais: 'francia'},
        pelicula
    ];
    
    var caja = document.querySelector("#peli");
    var index;
    
    for(index in peliculas){
        var p = document.createElement("p");
        p.append(peliculas[index].titulo);
        caja.append(p);
    
    }
});

//console.log(pelicula);