
// Variables
let lista = document.getElementById("lista"),
    tareaInput = document.getElementById("tareaInput"),
    btnNuevaTarea = document.getElementById("btn-agregar");

// Funciones
let agregarTarea = function () {
    let tarea = tareaInput.value,
        nuevaTarea = document.createElement("li"),
        listaTareas = document.createElement("a"),
        contenido = document.createTextNode(tarea);

    if (tarea === "") {
        tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
        tareaInput.className = "error";
        return false;
    }

    // Agregamos el contenido a lista de tareas
    listaTareas.appendChild(contenido);
    // Agrergamos el enlace (a) a la nueva tarea (li)
    nuevaTarea.appendChild(listaTareas);
    // Agregamos la nueva tarea a la lista
    lista.appendChild(nuevaTarea);

    tareaInput.value = "";

};
// Agregar Tarea
btnNuevaTarea.addEventListener("click", agregarTarea);

