```php
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario</title>
</head>
<body>

    <h1>Formulario de datos</h1>

    <form action="procesar.php" method="post">

        <label>Nombre:</label>
        <input type="text" name="nombre" required>
        <br><br>

        <label>Primer apellido:</label>
        <input type="text" name="apellido1" required>
        <br><br>

        <label>Segundo apellido:</label>
        <input type="text" name="apellido2" required>
        <br><br>

        <label>Edad:</label>
        <input type="number" name="edad" required>
        <br><br>

        <input type="submit" value="Enviar">

    </form>

</body>
</html>
```
