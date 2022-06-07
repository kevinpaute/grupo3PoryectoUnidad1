<?php

$incorrecto = "";
$conrrecto = "";





$user = $_POST['user'];
$pass = $_POST['password'];

//Los datos se reciben del formulario para logearse
if(isset($user)){
    //Crear variables de conexión
    define('SERVERNAME','localhost');
    define('USERNAME','root');
    define('PASSWORD','');
    define('DBNAME','login');

    //Se crea la conexión con la base de datos
    $conn = new mysqli(SERVERNAME, USERNAME, PASSWORD, DBNAME) or
    die('Error en la conexión');

    //Inicia la sesión
    session_start();

    $query = "SELECT * FROM login WHERE user_log = '$user' AND password_log = '$pass'";
    $result = mysqli_query($conn, $query) or die(mysqli_connect_error());

    //Almacena el o los datos en un arreglo y toma el siguiente
    $registro = mysqli_fetch_array($result);

    //Si el usuario y contraseña son correctos



     if($registro['id_login']==null){
       //Si es nulo redirige al mismo formulario

       header('Location: login.html');

 

    }else{ 
        //Se define las variables de sesión y se redirige a la página de usuario
        $_SESSION['id']=$registro['id_login']; 
        $_SESSION['nombre']=$registro['nombre_log'];
        $correcto ='<script type="module" src="./js/alertModules.js"></script>'
        header('Location: about.html');
        
    }
}else{
    
    
    header("location:login.html"); //Redireccionamos a la pagina principal
}




?>






