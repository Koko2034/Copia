//ACtividad 1
//(fin.html) Pedir una serie de nombres por teclado hasta que se teclee la palabra "Fin", 
//sin contemplar mayúsculas ni minúsculas. Es decir que para salir se pueda teclear fin, Fin o FIN.

const checkWord = (name) => name.toUpperCase() === "FIN" ? true : false;

//Actividad 2
/*(buscaclave.html) Realizar la búsqueda de una palabra clave en un texto. Se deberá teclear
la palabra clave en una caja de texto, el texto estará en un textarea. En caso de que la
búsqueda tenga éxito se imprimirá cada una de las posiciones donde se encuentre la cadena
buscada en la parte inferior de la página. No se tendrán en cuenta mayúsculas ni
minúsculas. No utilices expresiones regulares. ** */

//const findWord = (text,word) => text.split(" ").filter(element => element.toUpperCase() === word.toUpperCase());

//Actividad 3
/*(email.html) Realizar un programa que permita cargar una dirección de mail e implementar
una función que verifique si tiene cargado el carácter @ y el punto, no utilices expresiones
regulares.*/

const validateEmail = (email) => {
    const firstCheck=email.split("").filter((character)=>character==="@").lenght==1?true:false;
    const secondCheck=email.split("").filter((character)=>character===".").lenght<=1?true:false;
    return firstCheck && secondCheck ? true:false;
};

//Actividad 4
/*(metodosstring.html) Con el texto de una caja de texto, implementa los siguientes métodos:
a) Imprimir la primera mitad de los caracteres de la cadena.
b) Imprimir el último carácter.
c) Imprimirla en forma inversa.
d) Imprimir cada carácter de la cadena separado con un guión.
e) Imprimir la cantidad de vocales almacenadas.*/

const a = (text) => text.substring(0,(text.split().lenght/2));
const b = (text) => text.slice(-1);
const c= (text) => text.split("").reverse().join("");
const d = (text)=> text.split("").join("-");
const e = (text) => text.split(" ").toString().replace(",","-");

// Actividad 5
/*(lineas.html) Codifique un programa que muestre un texto con cada palabra en una línea
distinta. ** (modificar para que también haga una línea nueva cuando encuentre un salto de
línea)*/


const act5 = (text) => text.split(" ").join("\n");
// Actividad 6
/*Formulario que recoja el nombre y los apellidos y NIF de un usuario, se mostrará la cuenta
asignada:
Su cuenta estará formada por las iniciales de su nombre, las tres primeras letras de cada
apellido, seguido de los tres últimos números de su NIF.**/

const pass = (name,surname,nif)=> name.split(" ").map(x=>x.slice(0,1)).join("");
const pass1 = (surname) => surname.split(" ").map(x=>x.slice(0,3)).join("");
const pass2 = (dni) => dni.slice(dni.lenght-3,dni.lenght);

// Actividad 7
/*Basándote en (buscaclave.html), haz que se muestren con otro formato todas las
ocurrencias de la palabra clave que haya en el texto.*/

// ACtividad 8
/*Crea una página con varias clases, cada una definirá un aspecto distinto, por ejemplo, color
de fondo, tamaño del texto, color de la fuente...
En un lateral de la pantalla mostrar el nombre de las clases y un elemento al que se le
aplique, por ejemplo, <div>.
Junto a cada clase aparecerá un botón con el texto “aplicar” o “eliminar”.
En la parte central de la página habrá un elemento, inicialmente sin ninguna clase
aplicada.

Al pulsar el botón “aplicar” de una clase se añadirá esa clase al elemento central,
utilizando la propiedad className, y manteniendo las que tenga establecidas. Se
cambiará el texto del botón a “eliminar”.
Al pulsar el botón “eliminar” de una clase se eliminará esa clase del elemento central,
utilizando la propiedad className. Se cambiará el texto a “aplicar”.
- haz el ejercicio con arrays y con cadenas. */
