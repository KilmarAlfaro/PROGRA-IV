<?php
    $conexion = mysqli_connect(
        "localhost", "root", "", "universidad");
    if(mysqli_connect_errno()){
        die("Error: ".mysqli_connect_error());
   
    }else{
        echo "Conectado a la base de datos correctamente";
    }

    ?>