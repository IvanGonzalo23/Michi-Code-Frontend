// fecha.js

// Obtener las referencias de los selectores
const diaSelect = document.getElementById("dia");
const mesSelect = document.getElementById("mes");
const anoSelect = document.getElementById("ano");

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
