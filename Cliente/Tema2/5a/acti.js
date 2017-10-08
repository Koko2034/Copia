// Actividad 1
//Calcular el área de un círculo tras solicitar el radio desde un cuadro de diálogo.

const calculateArea = (radio)=> radio * 2 * Math.PI;


// Actividad 2
// Mostrar el valor de la constante Pi formateado a 4 decimales.

const piValue = () => Math.PI.toFixed(4);

//ACtividad 3
// Solicitar una frase desde teclado, almacenar cada palabra en un array y mostrar los siguientes datos:
// La primera palabra de la frase. La ultima palabra de la frase.//El numero de palabras de la frase.//Todasl las palabras ordenadas alfabeticamente.

const savePhrase = (frase) => frase.split(" ");
const firstWord = (arrayPhrase) => arrayPhrase[0];
const lastWord = (arrayPhrase) => arrayPhrase[arrayPhrase.lenght-1];
const totalWords = (arrayPhrase) => arrayPhrase.lenght;
const orderWords = (arrayPhrase) => arrayPhrase.sort().join(" ");

// Actividad 4
//Calcular el tiempo que ha pasado en milisegundos entre la fecha actual y la fecha Maya del final del mundo ( 21 de Diciembre de 2012).

const calcuTime = () => new Date() - new Date('12/21/2012');
//ACtividad 5
//Calcular el tiempo que ha pasado en dias entre la fecha actual y la fecha Maya del final del mundo( 21 diciembre de 2012 )
const calcuTimedays = () => (new Date() - new Date('12/21/2012'))/(1000*60*60*24);
// ACtividad 6
// Crea una pagina donde haya una funcion que al llamarla impprima el dia de hoy y la hora, como en el siguiente texto: 

const impriDate = () => "Hoy es " + (new Date().getDay())+"/"+(new Date().getMonth())+"/"+(new Date().getUTCFullYear())+"Son las "+(new Date().getHours())+":"+(new Date().getMinutes)+":"+(new Date().getSeconds;