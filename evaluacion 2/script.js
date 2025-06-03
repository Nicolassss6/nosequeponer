document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío

    const nombre = document.getElementById("nombre").value;
    const rut = document.getElementById("rut").value;
    const fecha = document.getElementById("fecha").value;
    const email = document.getElementById("email").value;
    const genero = document.getElementById("genero").value;
    const contrasena = document.getElementById("contrasena").value;
    const repetir = document.getElementById("repetir_contrasena").value;

    const mensaje = document.getElementById("mensaje");

    if (contrasena !== repetir) {
        mensaje.style.color = "red";
        mensaje.textContent = "Las contraseñas no coinciden.";
        return;
    }

    // Simula un objeto de usuario (uso de objetos JS)
    const usuario = {
        nombre,
        rut,
        fecha,
        email,
        genero
    };

    console.log("Formulario procesado:", usuario);

    // Simulación de guardado
    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));

    mensaje.style.color = "green";
    mensaje.textContent = "¡Registro exitoso!";
});
