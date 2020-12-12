'uses strict'

window.addEventListener('load', function(){
    // el sigbolo del $ significa Query  se puede usar tanto $ o JQuery
    $(document).ready(function(){
        console.log("JQuery ddddd");
    });


    $("#rojo").css("background", "red")
              .css("color", "white");

    $("#amarillo").css("background", "yellow")
                  .css("color", "green");

    $("#verde").css("background", "green")
               .css("color", "white");

    // selectores de clase
    var miClase = $(".zebra");

    $('.sin_borde').click(function() {
        $(this).addClass("zebra");
    });

    // selectores de etiquetas
    var parrafo = $("p").css("cursor", "pointer");

    parrafo.click(function(){
        var that = $(this);
        if(!that.hasClass("grande")){
            that.addClass("grande");
        }else{
            that.removeClass("grande");
        }
    });

    // selectores de atributos
    $('[title="Google]').css('background', '#ccc');
    $('[title="Facebook]').css('background', '#blue');
});