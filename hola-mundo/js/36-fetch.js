/**
 * La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes
 * del canal HTTP, tales como peticiones y respuestas. También provee un método global fetch()
 *  que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.
 * Peticiones a servivios / apis rest
 */
'uses strict'
window.addEventListener('load', function(){
    var div_usuarios = document.querySelector("#usuarios");
    var div_janet = document.querySelector("#janet");

    
    getUsuarios()
        // metodo then para capturar los datos /.json para convertir un objeto json usable 
        .then(data => data.json()) 
        .then(data => {
               list_usuarios(data.data);   
               
               return getJanet();
        })
        .then(data => data.json())
        .then(user => {
            mostrarJanet(user.data);
        });
        
        

    function getUsuarios(){
        return fetch('https://reqres.in/api/users');
    }

    function getJanet(){
        return fetch('https://reqres.in/api/users/2');
    }


    function list_usuarios(usuarios) {
        usuarios.map((user, i) => {
            let nombre = document.createElement('h2');
            nombre.innerHTML = i + '. ' + user.first_name + " " + user.last_name;

            div_usuarios.appendChild(nombre);

            document.querySelector('.cargando').style.display = 'none';

        });
    }

    function mostrarJanet(user) {
        
            let nombre = document.createElement('h3');
            let avatar = document.createElement('img');

            nombre.innerHTML =  user.first_name + " " + user.last_name;
            avatar.src = user.avatar;

            div_janet.appendChild(nombre);
            div_janet.appendChild(avatar);

            document.querySelector('#janet .cargando').style.display = 'none';

        
    }

});