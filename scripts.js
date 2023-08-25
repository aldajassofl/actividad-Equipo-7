const botonAgregar = document.querySelector('.boton-agregar');//Toma el nombre de una clase, elemento
const botonAgregarFormulario = document.querySelector('.boton-agregar-formulario');//Toma el nombre de una clase, elemento
const botonCancelar = document.querySelector('.boton-cancelar')
const formulario = document.querySelector('.contenedor-formulario');
let formularioVisible = false;

botonAgregar.addEventListener('click', () => {
    formularioVisible = !formularioVisible;
    
    if (formularioVisible) {
        formulario.style.visibility = "visible"; 
    }else{
        formulario.style.visibility = "hidden";
    }

});

botonAgregarFormulario.addEventListener('click', () => {
    formularioVisible = !formularioVisible;
    
    if (formularioVisible) {
        formulario.style.visibility = "visible"; 
    }else{
        formulario.style.visibility = "hidden";
    }

});

botonCancelar.addEventListener('click', () => {
    formularioVisible = !formularioVisible;
    
    if (formularioVisible) {
        formulario.style.visibility = "visible"; 
    }else{
        formulario.style.visibility = "hidden";
    }

});

const tabla = document.querySelector('#tabla');
const insertar = document.querySelector('#insert');
const valorUnidad = document.querySelector('#unidad');
const valorActividad = document.querySelector('#actividad');
const valorModalidad = document.querySelector('#modalidad');
const valorFecha = document.querySelector('#fecha');
const valorDescripcion = document.querySelector('#descripcion');

let unidad, actividad, modalidad, fecha, descripcion;

insertar.addEventListener('click', () => {
    unidad = valorUnidad.value;
    actividad = valorActividad.value;
    modalidad = valorModalidad.value;
    fecha = valorFecha.value;
    descripcion = valorDescripcion.value;

    console.log('Valor de Unidad:', unidad);
    console.log('Valor de Actividad:', actividad);
    console.log('Valor de Modalidad:', modalidad);
    console.log('Valor de Fecha:', fecha);
    console.log('Valor de Descripcion:', descripcion);

    const fila = tabla.insertRow();

    //CREAMOS LAS FILAS Y LE PASAMOS LOS VALORES
    const unidadNueva = fila.insertCell(0);
    const actividadNueva = fila.insertCell(1);
    const modalidadNueva = fila.insertCell(2);
    const fechaNueva = fila.insertCell(3);
    const descripcionNueva = fila.insertCell(4);
    const estatusNueva = fila.insertCell(5);

    unidadNueva.textContent = unidad;
    actividadNueva.textContent = actividad;
    modalidadNueva.textContent= modalidad;
    fechaNueva.textContent = fecha;
    descripcionNueva.textContent = descripcion;
    
    const check = document.createElement('input');
    check.type = 'checkbox';
    estatusNueva.appendChild(check);
});
