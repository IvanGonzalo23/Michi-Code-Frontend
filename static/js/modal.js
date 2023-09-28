// Función para abrir la ventana modal
function abrirModal() {
    crearServidorModal.style.display = 'block';
    const cerrarModalElement = document.getElementById('cerrarModal');
    const cerrarbtnModalElement = document.getElementById("cerrarBtnModal")
    cerrarModalElement.addEventListener('click', cerrarModal);
    cerrarbtnModalElement.addEventListener("click", cerrarModal)

}

// Función para cerrar la ventana modal
function cerrarModal() {
    console.log('Cerrando modal');
    crearServidorModal.style.display = 'none';
}

// Evento para abrir la ventana modal al hacer clic en el botón
crearServidorBtn.addEventListener('click', abrirModal);

// Evento para cerrar la ventana modal al hacer clic en la "X"
cerrarModalElement.addEventListener('click', cerrarModal);

// Evento para cerrar la ventana modal al hacer clic en el fondo difuminado
modalFondo.addEventListener('click', function (event) {
    if (event.target === modalFondo) {
        cerrarModal();
    }
});

// Evita que el clic dentro de la ventana modal la cierre
crearServidorModal.addEventListener('click', function (event) {
    event.stopPropagation();
});


// Efecto de movimiento al abrir el contenido de un canal
function openNav() {
    document.getElementById("container-extend").style.width = "100%";
}

function closeNav() {
    document.getElementById("container-extend").style.width = "0";
}