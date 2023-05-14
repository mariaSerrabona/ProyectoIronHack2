const boton_oscuro=document.getElementById("BotonOscuro");
const boton_claro=document.getElementById("BotonClaro");
var imagen_informacion1=document.getElementById("Mates");
var imagen_informacion2=document.getElementById("FotoDatos");

function CambiarModoOscuro(color_fondo, color_letras){
    if ( document.URL.includes("informacion.html") || document.URL.includes("Portfolio.html") ){
        document.body.style.backgroundColor = color_fondo;
        document.body.style.color= color_letras;
        if ( document.URL.includes("informacion.html") ) {
            var imagen_informacion1=document.getElementById("Mates");
            imagen_informacion1.src="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2021/10/data-science-skills-illustration.jpg";

            var imagen_informacion2=document.getElementById("FotoDatos");
            imagen_informacion2.src="https://www.cloudyml.com/wp-content/uploads/2022/06/Insurance-Leadspace-Aniamted.gif";
        }
    }

}

function CambiarModoClaro(color_fondo, color_letras){
    if ( document.URL.includes("informacion.html") || document.URL.includes("Portfolio.html") ){
        document.body.style.backgroundColor = color_fondo;
        document.body.style.color= color_letras;
        if ( document.URL.includes("informacion.html") ) {
            imagen_informacion1.src="https://digitalcreativemind.com/wp-content/uploads/2021/06/Analytics_amp_Data_Science.gif";
            imagen_informacion2.src="https://cdni.iconscout.com/illustration/premium/thumb/data-science-illustration-concept-1457949-1239367.png";
        }
    }
}

if ( document.URL.includes("informacion.html") || document.URL.includes("Portfolio.html") ){
    boton_oscuro.addEventListener("click", function()  { CambiarModoOscuro("#353232", "#A6A6A6")});


    boton_claro.addEventListener("click", function()  { CambiarModoClaro("#E4E0E4", "black")});

}




setTimeout(function(){alert("Hey! Si te gusta mi perfil, no dudes en contactar conmigo!")},5000);



var gotop=document.getElementsByClassName("go-top")[0];

window.onscroll=function(){scrollFunction()};

function scrollFunction() {
    if ( document.URL.includes("informacion.html") ||document.URL.includes("Portfolio.html")) {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            gotop.style.display = "block";
        } else {
            gotop.style.display = "none";
        }
    }
}

function topFunction() {
    //document.documentElement.scrollTop = 0;
    window.scrollTo(0,0);
}

if ( document.URL.includes("informacion.html") ||document.URL.includes("Portfolio.html")) {
    gotop.addEventListener("click", function()  { topFunction}, false);

}



let nombre=document.getElementById("Nombre");
let correo=document.getElementById("email");
let outputNombre=document.getElementById("Validacion");
let formulario =document.getElementById("form");
let asunto=document.getElementById("asunto");
let conjuntoErrores=document.getElementById("Validacion");
let respuesta=document.getElementById("respuesta");

if (document.URL.includes("Contacta.html")){

    formulario.addEventListener("submit" ,(e)=>{
        let errores=[]
        if (nombre.value.value==""){
            errores.push("nombre vacío");
        }
        if (nombre.value.length <=3){
            errores.push("El campo Nombre es demasiado corto, aporta nombre y apellidos");
        }
        if(nombre.value.length> 30){
            errores.push("El campo nombre es demasiado largo. Aporta un nombre y el primer apellido");
        }
        if (asunto.value.length >=20){
            errores.push("El campo Asunto debe ser más corto");
        }
        console.log(errores.length);
        if (errores.length >0){
            e.preventDefault();
            conjuntoErrores.innerText="Se han encontrado los siguientes errores: "+"\n"+errores.join('\n');
        }else {
            alert("Hola, "+nombre.value+"! Gracias por contactar conmigo."+"\n" +"Formulario enviado con éxito! En breves recibirá respuesta.")
        }
    })
}

formulario.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        let errores=[]
        if (nombre.value.value==""){
            errores.push("nombre vacío");
        }
        if (nombre.value.length <=3){
            errores.push("El campo Nombre es demasiado corto, aporta nombre y apellidos");
        }
        if(nombre.value.length> 30){
            errores.push("El campo nombre es demasiado largo. Aporta un nombre y el primer apellido");
        }
        if (asunto.value.length >=20){
            errores.push("El campo Asunto debe ser más corto");
        }
        console.log(errores.length);
        if (errores.length >0){
            e.preventDefault();
            conjuntoErrores.innerText="Se han encontrado los siguientes errores: "+"\n"+errores.join('\n');
        }else {
            alert("Hola, "+nombre.value+"! Gracias por contactar conmigo."+"\n" +"Formulario enviado con éxito! En breves recibirá respuesta.")
        }
    }
});
