
// Obtener las referencias de los selectores
const diaSelect = document.getElementById("dia");
const mesSelect = document.getElementById("mes");
const anoSelect = document.getElementById("anio");

// Generar opciones para los días (del 1 al 31)
for (let i = 1; i <= 31; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  diaSelect.appendChild(option);
}

// Generar opciones numéricas para los meses (del 1 al 12)
for (let i = 1; i <= 12; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  mesSelect.appendChild(option);
}

// Generar opciones para los años (desde el año actual hasta 100 años atrás)
const fechaActual = new Date();
const anoActual = fechaActual.getFullYear();
for (let i = anoActual; i >= anoActual - 100; i--) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  anoSelect.appendChild(option);
}


function createUser() {
  const username = document.getElementById("email").value;
  const email = document.getElementById("username").value;
  const name = document.getElementById("nombre").value;
  const lastname = document.getElementById("apellido").value;
  const password = document.getElementById("password").value;

  // Obtener los valores de los select
  const dia = document.getElementById("anio").value;
  const mes = document.getElementById("mes").value;
  const anio = document.getElementById("dia").value;



  // Verificar que todos los campos de fecha tengan valores válidos
  if (!dia || !mes || !anio) {
    alert("Por favor, seleccione una fecha de nacimiento válida.");
    return; // No enviar la solicitud si la fecha no es válida
  }
  // Almacenarlos en la variable fechaNacimiento
  const fechaNacimiento = `${dia}-${mes}-${anio}`;

  console.log(fechaNacimiento)
  // Datos del usuario a enviar al servidor
  const userData = {
    username: username,
    email: email,
    name: name,
    lastname: lastname,
    password: password,
    fecha: fechaNacimiento
  };

  // URL del endpoint para crear un usuario
  const createUserURL = "http://127.0.0.1:5000/createuser";

  // Configuración de la solicitud fetch
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
    credentials: "include",
  };

  // Realizar la solicitud fetch
  fetch(createUserURL, requestOptions)
    .then((response) => {
      if (response.status === 201) {
        // El usuario se creó exitosamente, puedes redirigir a otra página
        window.location.href = "/inicio";
      } else {
        return response.json().then((data) => {
          // Mostrar un mensaje de error en el HTML
          document.getElementById("message").innerHTML = data.error;
        });
      }
    })
    .catch((error) => {
      // Manejar errores de red u otros errores
      document.getElementById("message").innerHTML = "Ocurrió un error.";
    });
}
// Asociar la función createUser al evento click del botón de creación
const form = document.getElementById("myform");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  createUser();
});