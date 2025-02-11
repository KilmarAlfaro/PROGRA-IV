

var x = 0;

var array = Array();


function agregar(){

    array[x]= document.getElementById("text1").value;

    console.log(("El producto: " + array[x] + " se agrego a la lista " + x));
    x++;

    document.getElementById("text1").value= "";
}


function mostrar(){
    var e = "<hr/>";
    
for (var y = 0; y < array.length; y++) {
        e += " Producto " + y + " = " + array[y] + "<br/>";
}

document.getElementById("Result").innerHTML = e;
}
