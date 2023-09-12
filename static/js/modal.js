// Función para abrir la ventana modal
function abrirModal() {
    crearServidorModal.style.display = 'block';
}

// Función para cerrar la ventana modal
function cerrarModal() {
    console.log('Cerrando modal'); // Agrega este console.log para verificar
    crearServidorModal.style.display = 'none';
}

// Evento para abrir la ventana modal al hacer clic en el botón
crearServidorBtn.addEventListener('click', abrirModal);

// Evento para cerrar la ventana modal al hacer clic en la "X"
cerrarModal.addEventListener('click', cerrarModal);

// Evento para cerrar la ventana modal al hacer clic en el fondo difuminado
modalFondo.addEventListener('click', cerrarModal);

// Evita que el clic dentro de la ventana modal la cierre
crearServidorModal.addEventListener('click', function (event) {
    event.stopPropagation();
});

// Agregar funcionalidad para guardar el nombre del servidor en la base de datos
guardarServidorBtn.addEventListener('click', function () {
    const nombreServidor = document.getElementById('nombreServidor').value;
    
    // Envía el nombre del servidor a tu backend para guardarlo en la base de datos
    // ... (puedes usar AJAX, fetch, o cualquier otro método)
    
    // Cierra la ventana modal después de guardar
    cerrarModal();
});
