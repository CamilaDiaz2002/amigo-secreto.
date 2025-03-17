document.getElementById("addButton").addEventListener("click", agregarNombre);
document.getElementById("sortearButton").addEventListener("click", sortearAmigo);

let nombres = [];

function agregarNombre() {
    const nombreInput = document.getElementById("nombreInput");
    const nombre = nombreInput.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
    } else {
        nombres.push(nombre);
        nombreInput.value = ""; // Limpiar el campo de texto
        mostrarLista();
    }
}

function mostrarLista() {
    const listaNombres = document.getElementById("listaNombres");
    listaNombres.innerHTML = ""; // Limpiar la lista antes de mostrarla

    nombres.forEach(function (nombre) {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaNombres.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres para sortear.");
    } else {
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        const amigoSeleccionado = nombres[indiceAleatorio];
        document.getElementById("resultado").textContent = "El amigo sorteado es: " + amigoSeleccionado;
    }
}
