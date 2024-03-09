
const enviarFormulario = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const sexo = document.querySelector('input[name="sexo"]:checked');
    const preferencias = document.getElementById("preferencias").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!nombre || !apellido || !sexo || !preferencias || !telefono || !emailRegex.test(email)) {
        alert("Por favor, complete todos los campos correctamente.");
        return false;
    }

    alert("El formulario se ha enviado correctamente.");
    return false;
};

document.getElementById("formulario-contacto").onsubmit = enviarFormulario;
