function login() {
    const data = {
        email_username: document.getElementById("email_username").value,
        contrasenia: document.getElementById("contrasenia").value,
    };
    fetch("http://127.0.0.1:5000/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: 'include'
    })
        .then(response => {
            if (response.status === 200) {
                return response.json().then(data => {
                    window.location.href = "/inicio";
                });
            } else {
                return response.json().then(data => {
                    document.getElementById("message").innerHTML = data.message;
                });
            }
        })
        .catch(error => {
            document.getElementById("message").innerHTML = "Ocurrió un error.";
        });
}

// Asociar la función loginUserButton al evento click del botón de creación
const form = document.getElementById("myform");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    login();
});