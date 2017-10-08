// Actividad 1


// Actividad 2

var menu = ["garbanzos con chorizo","potaje de patatas","cocido madrileño","Pez espada","lentejas"];
var numMenu = prompt("Introduce un menu del 1 al 5 ");
alert("El menu es "+ menu[numMenu]);

// Actividad 3

/*<HTML>
<HEAD><TITLE>Baraja</TITLE>
</HEAD>
<BODY>
<script type="text/javascript">
var palo=""
palo=prompt("Elije un palo de la baraja","")
if (palo="oros" || palo="bastos"){alert ("Enhorabuena")}
else
{alert ("has fallado")}
</SCRIPT>
</BODY>
</HTML>
*/

// Linea 12 no se cierra la variable; linea 13 la variable palo no lleva puesto el var; linea 14 falta cada
// una de las diferentes igualdades copas y espadas y las igualdades les falta un =.
// Usamos antes del if un msg con has fallado y lo modificamos si entra en el if, solo tenemos 1 alert

/*
<HTML>
<HEAD><TITLE>Baraja</TITLE>
</HEAD>
<BODY>
<script type="text/javascript">
var palo="";
var palo=prompt("Elije un palo de la baraja");
var msg= " has fallado";
if (palo=="oros" || palo=="bastos" || palo=="espadas" || palo=="copas"){msg ="Enhorabuena";}
alert (msg);
</SCRIPT>
</BODY>
</HTML>
*/