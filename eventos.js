

const boton_oscuro=document.getElementById("BotonOscuro");

const boton_claro=document.getElementById("BotonClaro");

function CambiarModoOscuro(color_fondo, color_letras){
    document.body.style.backgroundColor = color_fondo;
    document.body.style.color= color_letras;
    if ( document.URL.includes("informacion.html") ) {
        var imagen_informacion1=document.getElementById("Mates");
        imagen_informacion1.src="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2021/10/data-science-skills-illustration.jpg";

        var imagen_informacion2=document.getElementById("FotoDatos");
        imagen_informacion2.src="https://www.cloudyml.com/wp-content/uploads/2022/06/Insurance-Leadspace-Aniamted.gif";
    }

    var encabezados_h2=document.getElementsByTagName("h2");
    encabezados_h2.style.color="##E4E0E4";
}

function CambiarModoClaro(color_fondo, color_letras){
    document.body.style.backgroundColor = color_fondo;
    document.body.style.color= color_letras;
    if ( document.URL.includes("informacion.html") ) {
        var imagen_informacion1=document.getElementById("Mates");
        imagen_informacion1.src="https://digitalcreativemind.com/wp-content/uploads/2021/06/Analytics_amp_Data_Science.gif";

        var imagen_informacion2=document.getElementById("FotoDatos");
        imagen_informacion2.src="https://cdni.iconscout.com/illustration/premium/thumb/data-science-illustration-concept-1457949-1239367.png";
    }
}

boton_oscuro.addEventListener("click", function()  { CambiarModoOscuro("#353232", "#A6A6A6")});

boton_claro.addEventListener("click", function()  { CambiarModoClaro("#E4E0E4", "black")});



