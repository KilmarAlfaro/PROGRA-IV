//funcion de una suma (funcion normales)
function suma(a,b){
    return a+b;
}
console.log(suma(30,2));
// alert(suma(20,2)); ventana emergente




//-------------------------
//otro tipo de funcion (anonimas)
var resta = function(a,b){
    return a-b;
}
console.log(resta(10,5));




//-------------------
//otro tipo de funcion (flecha)
//parametros => cuerpo de la funcion
var mult = (a,b) => a*b;


// par=> cuerpo            == operador ternario
var par = num => num % 2 == 0 ? "Es par":"Es impar";
console.log(par(3));


