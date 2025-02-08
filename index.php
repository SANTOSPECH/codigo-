<?php
include  'conexion.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario contacto</title>
    <link rel="stylesheet" href="estilo.css">
    <script src="script.js"></script>


</head>
<body>
    <form action=>

        <h2>Contacto</h2>
        <div class="input-group">
            <label for="name">Nombre</label>
            <input type="text" name="name" id="name">
            
            <label for="Apellido">Apellido</label>
            <input type="text" name ="apellido" id="apellido">

            <label for="email">Email</label>
            <input type="email" name="email" id="email">
            
        </div>
        <div>
            <label for="consulta">Tipo de consulta</label>
            <br>
                <input type="radio" name="consulta" value="consulta">Consulta general
                <input type="radio" name="consulta" value="consulta">
                Solicitud de soporte

            <label for="message">Mensaje</label>
            <textarea name="message" id="message" cols="50" rows="5"></textarea>
        </div>
        <br>
        <div>
             <input type="checkbox" name="consent" value="Consulta">
             Autorizó para ser contactado por el equipo
             <br>

             <input class="btn" type="submit" value="Enviar">
            

        </div>
        <br>

        
    </form>
</body>
</html>