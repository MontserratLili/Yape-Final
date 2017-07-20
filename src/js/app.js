//Inicializando Carousel de sección inicio
$('.carousel.carousel-slider').carousel({
    fullWidth: true
});

//Funcionalidad botón sección inicio
var botonInicio = document.getElementById("botonIncio");
var sprimera = document.getElementById("sprimera");

function ocultarSeccion() {
    sprimera.style.display = "none";
};

//Validación de longitud de teléfono y chekbox activado
var validar = document.getElementById("boton");

function contar() {
    var numero = document.getElementById("casillaNumero").value;
    console.log(numero);
    var contado = numero.length;
    console.log(contado);
    var maximo = 10;
    var casilla = document.getElementById("filled-in-box");

    if (contado == maximo && casilla.is(":checked") == true) {
        console.log("ok");
        validar.removeAttribute("disabled");
    } else if (casilla.is(":checked") == false && contado > maximo);
    validar.attr("disabled", true);
};

//Escuchadores de eventos asignados a los elementos HTML
botonInicio.addEventListener("click", ocultarSeccion);
validar.addEventListener("click", contar);

/*if(contado<=maximo){
        alert("ok");
    }else{
        alert("no ok");
    }
    if(c1==false){
        alert("bien");
    }else{
        alert("no bien")
    }*/

//Validación de teléfono
