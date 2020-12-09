'uses strict'

window.addEventListener('load', function(){
    console.log("DOM cargado!!");

    var form = document.querySelector("#form");
    var box_dashed = document.querySelector(".dashed")

    box_dashed.style.display = "none";

    form.addEventListener('submit', function(){
        console.log("Evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        if(nombre.trim() == null || nombre.trim().length == 0) {
            alert("el nombre no es valido");
            document.querySelector("#nombre_error").innerHTML = "El nombre  no es valido";
            return false;
        }else{
            document.querySelector("#nombre_error").style.display = "none";
        }

        if(apellidos.trim() == null || apellidos.trim().length == 0) {
            alert("los apellidos no es valido");
            document.querySelector("#apellidos_error").innerHTML = "los apellidos  no es valido";
            return false;
        }else{
            document.querySelector("#apellidos_error").style.display = "none";
        }

        if(edad == null || edad <= 0 || isNaN(edad)) {
            alert("la edad no es valido");
            document.querySelector("#edad_error").innerHTML = "la edad   no es valido";
            return false;
        }else{
            document.querySelector("#edad_error").style.display = "none";
        }

        box_dashed.style.display = "block";

        var datos_usuario = [nombre, apellidos, edad];

        for(indice in datos_usuario){
            var parrafo = document.createElement("p");
        
            parrafo.append(datos_usuario[indice]);

            box_dashed.append(parrafo);
        }

        
    });
});