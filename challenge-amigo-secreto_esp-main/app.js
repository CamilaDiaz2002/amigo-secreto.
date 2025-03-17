let amigos = [];

function agregarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const amigoNombre = amigoInput.value.trim();
    
    if (amigoNombre !== "") {
        amigos.push(amigoNombre);
        actualizarListaAmigos();
        amigoInput.value = ""; 
    }
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    amigos.forEach(amigo => {
        const listItem = document.createElement("li");
        listItem.textContent = amigo;
        listaAmigos.appendChild(listItem);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Por favor, agrega al menos dos amigos para realizar el sorteo.");
        return;
    }

    const amigosSorteados = [...amigos];
    const resultado = {};

    const disponibles = [...amigos]; 

    amigos.forEach(amigo => {
        let index = Math.floor(Math.random() * disponibles.length);
        let amigoSecreto = disponibles[index];


        while (amigoSecreto === amigo) {
            index = Math.floor(Math.random() * disponibles.length);
            amigoSecreto = disponibles[index];
        }

        disponibles.splice(index, 1);
        resultado[amigo] = amigoSecreto;
    });

    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "";

    for (const [amigo, amigoSecreto] of Object.entries(resultado)) {
        const listItem = document.createElement("p");
        listItem.textContent = `${amigo} -> ${amigoSecreto}`;
        resultadoElemento.appendChild(listItem);
    }
}
