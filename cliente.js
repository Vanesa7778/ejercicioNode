function generarTablaUsuarios() {
    const tbody = document.getElementById("tbody-usuarios");
    
    fetch("http://localhost:3030/api/usuarioOdontologia")
        .then(response => response.json())
        .then(usuario => {
            usuario.forEach(function (usuario) {
                const fila = tbody.insertRow();
                const celdaId = fila.insertCell();
                const celdaNombre = fila.insertCell();
                const celdaApellido = fila.insertCell();
                const celdaEdad = fila.insertCell();
                const celdaTelefono = fila.insertCell();
                const celdaDireccion = fila.insertCell();

                celdaId.textContent = usuario.id;
                celdaNombre.textContent = usuario.nombre;
                celdaApellido.textContent = usuario.apellido;
                celdaEdad.textContent = usuario.edad;
                celdaTelefono.textContent = usuario.telefono;
                celdaDireccion.textContent = usuario.direccion;
    
            });
        });
    }
generarTablaUsuarios();