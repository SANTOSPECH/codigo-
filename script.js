document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const apellidoInput = document.getElementById("apellido");
    const emailInput = document.getElementById("email");
    const consultaRadios = document.getElementsByName("consulta");
    const messageInput = document.getElementById("message");
    const consentCheckbox = document.querySelector("input[name='consent']"); // Corregido el nombre del checkbox

    function showError(input, message) {
        const errorElement = document.createElement("div");
        errorElement.className = "error-message";
        errorElement.style.color = "red";
        errorElement.textContent = message;
        input.insertAdjacentElement("afterend", errorElement); // Mejorado para insertar después del input
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(error => error.remove());
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        clearErrors();
        let valid = true;

        // Validación del nombre
        if (!nameInput.value.trim()) {
            showError(nameInput, "Este campo es obligatorio");
            valid = false;
        }

        // Validación del apellido
        if (!apellidoInput.value.trim()) {
            showError(apellidoInput, "Este campo es obligatorio");
            valid = false;
        }

        // Validación del correo electrónico
        if (!emailInput.value.trim()) {
            showError(emailInput, "Este campo es obligatorio");
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            showError(emailInput, "Por favor, introduce una dirección de correo electrónico válida");
            valid = false;
        }

        // Validación del tipo de consulta
        let consultaSeleccionada = false;
        for (let radio of consultaRadios) {
            if (radio.checked) {
                consultaSeleccionada = true;
                break;
            }
        }

        if (!consultaSeleccionada) {
            showError(consultaRadios[0], "Por favor, selecciona un tipo de consulta");
            valid = false;
        }

        // Validación del mensaje
        if (!messageInput.value.trim()) {
            showError(messageInput, "Este campo es obligatorio");
            valid = false;
        }

        // Validación del consentimiento
        if (!consentCheckbox.checked) {
            showError(consentCheckbox, "Para enviar este formulario, por favor consiente ser contactado");
            valid = false;
        }

        // Si todo es válido, enviar el formulario
        if (valid) {
            alert("¡Mensaje enviado!\nGracias por completar el formulario. ¡Nos pondremos en contacto pronto!");
            form.reset();
        }
    });
});