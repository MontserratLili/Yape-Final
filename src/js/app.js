//Inicializando Carousel de sección inicio
$('.carousel.carousel-slider').carousel({fullWidth: true});

//Funcionalidad botón sección inicio
var botonInicio = document.getElementById("botonIncio");
var sprimera= document.getElementById("sprimera");

function ocultarSeccion(){
    sprimera.style.display = "none";
};

botonInicio.addEventListener("click", ocultarSeccion);

//Validación de longitud de teléfono y chekbox activado

var maximo = 10;
var validar = document.getElementById("boton");
var c1 = document.getElementById("filled-in-box").checked;

function contar (){
    var numero = document.getElementById("casillaNumero").value;
    console.log(numero);
    var contado = numero.length;
    console.log(contado);
    
    if(contado==maximo && c1==true){
        console.log("ok");
        removeAttribute("disabled");
    }
};


validar.addEventListener("click", contar);
//validar.addEventListener("click", validando);
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




