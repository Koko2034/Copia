// Actividades 2.1

function preguntar(){
    return " Esta seguro de querer hacer esto??";
}
function esquema(){
    preguntar();
    var contestacion;
    contestacion = true ? afirmacion():negacion();
}
function afirmacion(){
    return " Ha respondido si";
}
function negacion(){
    return "ha rehusado contestar";
}
function esquema2(){
    preguntar();
    var contestacion;
    var prede = "ha rehusado contestar";
    if(contestacion){
        prede =  "Ha respondido si";
    }
    return prede;
}

// Actividad 2.2

function preguntar(){
    return "Que densidad tiene el material elegido?";
}

function esquema(){
    preguntar();
    var contestacion;
    var prede = " El material se hundira";
    if(contestacion){
        prede = "El material flotara";
    }
    return prede;
}

// Actividad 2.3
/*
<HTML> 
</HEAD> 
<BODY> 
<script type="text/javascript"> 
var nombre="" 
nombre=prompt("¿Cómo te llamas?";"") 
alert "Te llamas "+nombre; 
</SCRIPT> 
</BODY> 
</HTML> */

// Falta etiqueta de abertura de HEAD. Falta ; en la var nombre. en la definicion del nombre sobra ;"" y faltan las comillas; el alert le falta los parentesis

