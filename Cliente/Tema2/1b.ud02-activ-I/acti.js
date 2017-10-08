// Actividad 2.2
alert("I\`m = I am\n")
alert("I\`m not = I am not\n");
// Actividad 2.3
 var primer_saludo = "hola";
var segundo_saludo = primer_saludo;
primer_saludo = "hello";
alert(segundo_saludo);
Res: "HOLA";
// Actividad 2.4
var sueldo = 100.1;
var nombre = "Javier";
nombre + " \n" + sueldo;
// Actividad 2.5

// Actividad 2.6

// Actividad 2.7
var numEntero = 10;
var numCFlotante = 3.2;
var cadena = "texto";
var boolean = true;
var refObjeto = window;
typeof(numEntero);

// Actividad 2.8

var nombre = "numEntero " + numEntero + " " + typeof(numEntero) +"\n numCFlotante " + numCFlotante + " " + typeof(numCFlotante);

//Actividad 2.9

// Actividad 2.10

function sumar(num1,num2){
    return "El resultado de la operacion "+num1+" + "+ num2+ " es "+(num1+num2);
}

sumar(3,2);

function restar(num1,num2){
    return "El resultado de la operacion "+num1+" - "+ num2+ " es "+(num1-num2);
}

restar(3-2);

// Actividad 2.11

function perimetro(lado){
    return "el perimetro de un cuadrado de lado "+lado +" es "+(lado*lado);
}

perimetro(5);

// Actividad 2.12

function sumayproducto(num1,num2,num3,num4){
    return "el resultado es "+(num1+num2)+" y "+(num3*num4);
}

sumayproducto(2,3,4,5);

function compra(num1,num2){
    return " el cliente debe abonar "+ (num1,num2);
}

compra(4,6);