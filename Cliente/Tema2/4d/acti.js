const calcuIva= ()=> {
    let num = prompt("Introduce un numero");
    if(num==""){
        return "No ha introducido ningun numero";
    }else if(isNaN(num)){
        alert("No ha introducido un numero");
        calcuIva();
    }else{
        alert("El precio con IVA es de "+parseInt(num*1.21));
    }
} 

const numShow = () => {
    let cont=0;
    let num=[];
    let media = 0;
    do{
        num[cont]=prompt("introduce un numero");
        console.log(num[cont]);
        cont++;
        if(isNaN(num[cont-1])){
            alert("No ha introducir un numero");
            cont--;
        }
    }while(num[cont-1]!=null);
    let str = "la media es "+(num.reduce((x,y)=>parseInt(x)+parseInt(y))/cont)
    if(cont==0){
        str ="no ha introducido ningun numero";
    }
   
    alert(str);
}
/*<html>
<head>
<script>
var C=0 => falta el ;
function resta(A,B) => faltan las llaves;
C=A-B => falta el ;
return C;
</script>
</head>
<body>
<SCRIPT languaje="JavaScript">
A=parseInt(prompt ("Introduce el número A",0));
B=parseInt(prompt ("Introduce el número B",0));
alert ("Resta ="+resta (A,B)); => Deberia de poner resta pegado a ()
</script>
</body>
</html>
*/