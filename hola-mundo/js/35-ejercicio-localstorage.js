'uses strict'
// localStorage
window.addEventListener('load', function(){
    // añadir peliculas al local storage 
    var formulario = document.querySelector("#formPeliculas");
    formulario.addEventListener('submit', function(){
        var titulo = document.querySelector('#addPeliculas').value;
        if(titulo.length >= 1){
            localStorage.setItem(titulo, titulo);
        }
    });
    var ul = document.querySelector("#peliculas-list");
    for(var i in localStorage){
       // console.log(localStorage[i])
        if(typeof localStorage[i] == 'string'){
            var li = document.createElement('li');
            li.append(localStorage[i]);
            ul.append(li);
        }
    }
    // borrar peliculas
    var formularioB = document.querySelector("#formBorrar");
    formularioB.addEventListener('submit', function(){
        var titulo = document.querySelector('#borraPeliculas').value;
        if(titulo.length >= 1){
            localStorage.removeItem(titulo);
        }
    });
});

