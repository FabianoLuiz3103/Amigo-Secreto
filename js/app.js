let amigosIncluidos = [];

function adicionar(){

    let nomeInformado = document.getElementById('nome-amigo').value;
    amigosIncluidos.push(nomeInformado);
    
    let tagAmigosIncluidos = document.getElementById('lista-amigos');
    tagAmigosIncluidos.textContent = amigosIncluidos.join(", ");

    document.getElementById('nome-amigo').value = null;
}

function sortear(){
    
    embaralha(amigosIncluidos);
    
    let sorteio =  document.getElementById('lista-sorteio');
    for(let i = 0; i < amigosIncluidos.length; i++){

        if(i == amigosIncluidos.length-1){
            sorteio.innerHTML = sorteio.innerHTML+ amigosIncluidos[i] + ' --> ' + amigosIncluidos[0] + '<br>'
        } else {
            sorteio.innerHTML = sorteio.innerHTML+ amigosIncluidos[i] + ' --> ' + amigosIncluidos[i+1] + '<br>'
        }
      
    }
    
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigosIncluidos = [];
    document.getElementById('nome-amigo').value = null;
    document.getElementById('lista-amigos').textContent = ' ';
    document.getElementById('lista-sorteio').innerHTML = ' ';

}