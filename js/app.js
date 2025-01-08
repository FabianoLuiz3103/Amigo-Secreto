let amigosIncluidos = [];

function adicionar(){

    let nomeInformado = document.getElementById('nome-amigo').value;
    amigosIncluidos.push(nomeInformado);
    
    let tagAmigosIncluidos = document.getElementById('lista-amigos');
    tagAmigosIncluidos.textContent = amigosIncluidos;

    document.getElementById('nome-amigo').value = ' ';
}

function sortear(){
    
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
    return lista;
}