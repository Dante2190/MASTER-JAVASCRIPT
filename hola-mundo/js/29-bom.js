'uses strict'

// BOM Browser Object Model es una convención específica que se refiere a todos los objetos
// expuestos por el navegador web. A diferencia del Document Object Model (DOM), no hay ningún 
// estándar para la implementación y ninguna definición estricta, por los que los proveedores de navegadores 
// son libres de implementar el BOM de cualquier manera que deseen.
// todo lo que se puede hacer en el navegador lo podemos hacer des javaScript 


// saber el tamaño de la pantalla

function getBom(){
  //  console.log(window.innerWidth);
 //   console.log(window.innerHeight);

 // de diferente forma 
    console.log(screen.width);
    console.log(screen.height);
}

getBom();