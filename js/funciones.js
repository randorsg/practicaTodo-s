const listaDeElementos = new Array();

let btnGuardar = document.querySelector('#btn-guardar');
let inputTextLista = document.querySelector('#guardar');
let inputTextBusqueda = document.querySelector('#search')
let prioridadTarea = document.querySelector('#prioridad-tarea');
let divPintar = document.querySelector('.main-tareas');
let selectorPrioridadNav = document.querySelector('#prioridad-tarea-nav');


btnGuardar.addEventListener('click', addTareas);
selectorPrioridadNav.addEventListener('change', seleccionTarea);
inputTextBusqueda.addEventListener('input', recogerTextoBusqueda);

function addTareas(event) {
    event.preventDefault();
    if (inputTextLista.value === "" || prioridadTarea.value === '0') {
        alert('Todos los campos son obligatorios')
        return
    }
    const tareasList = new ListadeTareas(inputTextLista.value, prioridadTarea.value);
    listaDeElementos.push(tareasList);
    pintarAllTareas(listaDeElementos);
}

function pintarAllTareas(pLista) {
    divPintar.innerHTML = "";
    pLista.forEach(tarea => tarea.pintarTarea(divPintar))
}

function listaFiltradaPrioridades(pPrioridad) {

    const listaDePrioridades = listaDeElementos.filter(prioridadBuscada => prioridadBuscada.prioridad === pPrioridad);
    return listaDePrioridades;
}

function seleccionTarea(event) {
    event.preventDefault();

    let seleccionPrioridad = event.target.value;

    if (seleccionPrioridad != "") {
        const filtradoPrioridad = listaFiltradaPrioridades(seleccionPrioridad);

        pintarAllTareas(filtradoPrioridad);
    } else {
        pintarAllTareas(listaDeElementos);
    }
    return seleccionPrioridad;
}

function buscarPalabra(pPalabra) {
    let palabra = pPalabra.toLowerCase().trim();
    let listaFiltrada = listaDeElementos.filter(palabrabuscar => {
        return palabrabuscar.titulo.toLowerCase().includes(palabra)
    })
    return listaFiltrada;
}

function recogerTextoBusqueda(event) {
    if (event.target.value !== '') {
        let tareasFiltradas = buscarPalabra(event.target.value, listaDeElementos);
        pintarAllTareas(tareasFiltradas);
    } else {
        pintarAllTareas(listaDeElementos);
    }
}