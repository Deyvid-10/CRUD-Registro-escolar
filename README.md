# CRUD Registro escolar

En este CRUD busco simular un registro de estudiantes de una escuela. He creado esta página con el objetivo de ofrecer una solución efectiva y eficiente para la gestión de registros escolares, realizando las cuatro tareas de un CRUD creación de registros, lectura y visualización, actualización de registros y eliminación de registros.

Si quieres ver mi trabajo de forma local en tu equipo, revisa mi documentación y sigue los pasos!

## Requisitos

    -Tener instalado node.js y NPM
    -Tener MySQL Workbench instalado

## a) Preparar la base de datos

    1-Crear una conexión con la siguiente configuración:
        hostname: localhost
        username: root
        password: Contrasena20
        schema or database: registro_escolar
    NOTA: es importante que la configuración sea igual porque la API tiene estos datos configurados para funcionar

    2-Colocar la base de datos (en este caso registro_escolar) por defecto (click derecho a la base de datos y set as default schema)
    3-Abrir el archivo base_de_datos.sql
    4-Copiar el contenido y pegarlo en tu gestor de base datos
    5-Ejecuta el Query 
    6-Confirmar que la tabla 'estudiantes' se haya creado. 

## b) Ejecutar o iniciar la API

    1-Abre una terminal
    2-Utilizando el cmdlet 'cd' para ir a la carpeta donde se encuentra la API (ej: cd C:\Users\mi_usuario\Documents\CRUD-Registro-escolar\API) 
    3-En la carpeta donde se encuentra la API ejecutar el comando 'npm install' para instalar las dependencias desde el archivo 'package.json'
    4-En la carpeta donde se encuentra la API ejecutar el comando 'npm run dev' para iniciar la API

### `npm install`
### `npm run dev`

## c) Abrir la aplicación

Ahora sí!

    1-Busca el archivo 'index.js' (lo podras encontrar navegando por las carpetas assets/js/index.js)
    2-Abre el archivo, quitale el comentario a la linea 1 y comenta la linea 2 (puedes elegir que el proyecto consuma la api local que preparaste anteriormente o la api que ya tengo en la nube)
    3-Por ultimo busca el archivo 'index.html' (que encontraras regresando entre carpetas) y simplemente dale boble click