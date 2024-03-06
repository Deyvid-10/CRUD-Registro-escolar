// enlace de la api
// let link = 'http://localhost:3000/escuela/'
let link = 'https://crud-registro-escolar-api.onrender.com/escuela/'

// funcion para ver los registros en una lista
function listado()
{
    // acceder al elemento donde se va ver el listado
    let listado = document.getElementById("contenedor-listado")

    // solicitud GET para la api
    fetch(link)
    .then(respuesta => respuesta.json())
    .then(salida => {

        // deternimar si la base de datos no tiene elementos
        if (salida == "")
        {
            listado.innerHTML = "<h2>No hay ningun registro en la base de datos!<h2>"
        }
        else
        {
            for (s of salida)
            {
                // mostrar elementos del listado

                // nombre del estudiante con su ruta
                let elemento_listado = document.createElement("a")
                elemento_listado.innerHTML = `<li>${s.nombre} ${s.apellido}<li>`
                elemento_listado.setAttribute("href", "ver.html")
                elemento_listado.setAttribute("class", "elemento_listado")
                elemento_listado.setAttribute("onclick", `recolector_id(${s.id})`)

                // boton para editar registro
                let elemento_editar = document.createElement("a")
                elemento_editar.innerHTML = '<svg class="boton_editar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>'
                elemento_editar.setAttribute("href", "editar.html")
                elemento_editar.setAttribute("onclick", `recolector_id(${s.id})`)

                // boton para eliminar registro
                let elemento_eliminar = document.createElement("a")
                elemento_eliminar.innerHTML = '<svg class="boton_eliminar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>'
                elemento_eliminar.setAttribute("onclick", `ver_eliminar(${s.id})`)

                // agregar los botones y elemento de listado
                let contenedor_elemento_listado = document.createElement("div")
                contenedor_elemento_listado.setAttribute("class", "contenedor-elemento-listado")

                let contenedor_botones = document.createElement("div")

                contenedor_botones.appendChild(elemento_editar)
                contenedor_botones.appendChild(elemento_eliminar)
                contenedor_elemento_listado.appendChild(elemento_listado)
                contenedor_elemento_listado.appendChild(contenedor_botones)
                listado.appendChild(contenedor_elemento_listado)

            }
        }
    })
    .catch(error => alert(error))
}

// funcion para recolectar el id del registro seleccionado
function recolector_id(id)
{   
    localStorage.setItem("id", id)
}
// obtener el id pasado por el recolector de id
let id = localStorage.getItem("id")

// obtener los valores de cada campo
function obtener_campos()
{
    let valores = []
    let campos = ["nombre", "apellido", "fecha", "genero", "nacionalidad", "direccion", "contacto", "matricula", "curso"]

    for(c of campos)
    {
        let elemento_campo = document.getElementById(c)
        valores.push(elemento_campo.value)
    }

    return valores
}

// funcion para reniciar los campos
function reiniciar_campos()
{

    // dejar campos vacios
    let campos = ["nombre", "apellido", "fecha", "genero", "nacionalidad", "direccion", "contacto", "matricula", "curso"]

    for(c of campos)
    {
        let elemento_campo = document.getElementById(c)
        elemento_campo.value = ""
    }

    // volver a su estado original los listbox
    let list_genero = document.getElementById('genero');
    let opcion_genero = list_genero.querySelector(`option[value="Masculino"]`);
    opcion_genero.selected = true;
  
    let list_nacionalidad = document.getElementById('nacionalidad');
    let opcion_nacionalidad = list_nacionalidad.querySelector(`option[value="Dominicana"]`);
    opcion_nacionalidad.selected = true;

    let list_curso = document.getElementById('curso');
    let opcion_curso = list_curso.querySelector(`option[value="1ro de bachillerato"]`);
    opcion_curso.selected = true;
}

// funcion para agregar registros
function agregar()
{
    // obtener el array de la funcion
    let valores = obtener_campos()

    // campos que no pueden ir vacios
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let fecha = document.getElementById("fecha").value
    let matricula = document.getElementById("matricula").value

    // mensaje para advertir que hau campos vacios
    if(nombre == ""  || apellido == "" || fecha =="" || matricula == "" )
    {
        let confirmacion = document.getElementById("confirmacion")
        confirmacion.textContent = "*Hay algun campo vacio*"
    }
    else 
    {
        // solicitud POST para agregar los registros
        fetch(link, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                nombre: valores[0],
                apellido: valores[1],
                fecha: valores[2],
                genero: valores[3],
                nacionalidad: valores[4],
                direccion: valores[5],
                contacto: valores[6],
                matricula: valores[7],
                curso: valores[8]
            })
    })
    .then(respuesta => {})
    .catch(error => console.error(error))

    // mensaje de confirmacion 
    let confirmacion = document.getElementById("confirmacion")
    confirmacion.textContent = "*Se guardo correctamente*"

    // llamar a reiniciar
    reiniciar_campos()
    }
}

// funcion para ver cada elemento individual
function ver()
{

    // solicicitud get por cada registro
    fetch(link + id)
    .then(respuesta => respuesta.json())
    .then(salida => {
        // acceder al elemento donde se va ver el listado
        let listado = document.getElementById("contenedor-listado-ver")

        for(s in salida[0])
        {
            // construccion del encabezado
            let encabezado = s.charAt(0).toUpperCase() + s.slice(1)

            // crear encabezado
            let elemento_encabezado = document.createElement("li")
            elemento_encabezado.innerText = encabezado + ":"

            // crear detalle
            let elemento_detalle = document.createElement("li")
            elemento_detalle.innerText = salida[0][s]

            // agregar todo
            let contenedor_listado = document.createElement("div")
            contenedor_listado.appendChild(elemento_encabezado)

            contenedor_listado.appendChild(elemento_detalle)
            contenedor_listado.setAttribute("class", "contenedor-elemento-listado")

            listado.appendChild(contenedor_listado)
        }

        
    })
    .catch(error => alert(error))
}

// obtener los valores de cada campo
function obtener_campos()
{
    let valores = []
    let campos = ["nombre", "apellido", "fecha", "genero", "nacionalidad", "direccion", "contacto", "matricula", "curso"]

    for(c of campos)
    {
        let elemento_campo = document.getElementById(c)
        valores.push(elemento_campo.value)
    }

    return valores
}

// funcion para obtener los valores del registro y asignarlos a cada campo
function ver_editar()
{

    // solicitud GET para llenar los campos
    fetch(link + id)
    .then(respuesta => respuesta.json())
    .then(salida => {

        // obtener los elementos por el id
        let valores = []
        let campos = ["nombre", "apellido", "fecha", "genero", "nacionalidad", "direccion", "contacto", "matricula", "curso"]
    
        for(c of campos)
        {
            let elemento_campo = document.getElementById(c)
            valores.push(elemento_campo)
        }

        // dar el valos a cada campo input y listbox
        valores[0].value = salida[0].nombre
        valores[1].value = salida[0].apellido
        valores[2].value = salida[0].fecha

        let list_genero = document.getElementById('genero');
        let opcion_genero = list_genero.querySelector(`option[value="${salida[0].genero}"]`);
        opcion_genero.selected = true;
      
        let list_nacionalidad = document.getElementById('nacionalidad');
        let opcion_nacionalidad = list_nacionalidad.querySelector(`option[value="${salida[0].nacionalidad}"]`);
        opcion_nacionalidad.selected = true;

        valores[5].value = salida[0].direccion
        valores[6].value = salida[0].contacto
        valores[7].value = salida[0].matricula

        let list_curso = document.getElementById('curso');
        let opcion_curso = list_curso.querySelector(`option[value="${salida[0].curso}"]`);
        opcion_curso.selected = true;

    })
    .catch(error => console.error(error))
}

// funcion para editar los registros
function editar()
{
         // obtener el array de la funcion
        let valores = obtener_campos()

        // campos que no pueden ir vacios
        let nombre = document.getElementById("nombre").value
        let apellido = document.getElementById("apellido").value
        let fecha = document.getElementById("fecha").value
        let matricula = document.getElementById("matricula").value
    
        // mensaje para advertir que hay un campo vacio
        if(nombre == ""  || apellido == "" || fecha =="" || matricula == "" )
        {   
            let confirmacion = document.getElementById("confirmacion")
            confirmacion.textContent = "*Hay algun campo vacio*"
        }
        else
        {
        // solicitud PUT para agregar los registros
        let editar = fetch(link + id, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                nombre: valores[0],
                apellido: valores[1],
                fecha: valores[2],
                genero: valores[3],
                nacionalidad: valores[4],
                direccion: valores[5],
                contacto: valores[6],
                matricula: valores[7],
                curso: valores[8]  
            })
        })
        .then(respuesta => {})
        .catch(error => console.error(error))
    
        // mensaje de confirmacion 
        let confirmacion = document.getElementById("confirmacion")
        confirmacion.textContent = "*Se actualizo correctamente correctamente*"
        }
}

// funcion para ver eliminar registros
function ver_eliminar(id)
{
    // solicicitud get para obtener el nombre del estudiante
    fetch(link + id)
    .then(respuesta => respuesta.json())
    .then(salida => {
        // obtener el nombre del estudiantes
        let estudiante = document.getElementById("nombre-estudiante")
        estudiante.innerText = salida[0].nombre + " " + salida[0].apellido

        // hacer que la ventana para eliminar aparezca
        let fondo = document.getElementById("fondo-eliminar")
        let ventana = document.getElementById("contenedor-eliminar")

        fondo.style.display = "block"
        ventana.style.display = "block"
    })
    .catch(error => alert(error))

    // guardar el id
    localStorage.setItem("id", id)
}

// funcion para eliminar registros
function eliminar()
{

    // obtener el id guardado
    let id = localStorage.getItem("id")

    // solicitud DELETE para eliminar el registro
    fetch(link + id, {
        method: 'DELETE'
    })
    .then(respuesta => {
        alert("se elimino correctamente")
        window.location.href = "index.html"
    })
    .catch(error => console.error(error))

    
}

// funcion para cerrar ventana eliminar
function cerrar_eliminar()
{
    let fondo = document.getElementById("fondo-eliminar")
    let ventana = document.getElementById("contenedor-eliminar")

    fondo.style.display = "none"
    ventana.style.display = "none"
}