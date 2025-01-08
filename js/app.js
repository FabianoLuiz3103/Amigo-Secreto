let amigosIncluidos = [];

function adicionar(){

    let nomeInformado = document.getElementById('nome-amigo').value.trim();
    let tagNome = document.getElementById('nome-amigo');
    let erroVazio = document.getElementById('erro-vazio');
    if(!nomeInformado){
        erroVazio.textContent = 'Erro! Informe um nome.';
        tagNome.classList.add('form__input_erro');
    } else {
        erroVazio.textContent ="";
        tagNome.classList.remove('form__input_erro');
        amigosIncluidos.push(verificarNomesIguais(`${nomeInformado}`));
    }
    
    let tagAmigosIncluidos = document.getElementById('lista-amigos');
    tagAmigosIncluidos.textContent = amigosIncluidos.join(", ");

    document.getElementById('nome-amigo').value = null;
}

function verificarNomesIguais(n){
    let contador = 1;
    let nome = n;

    while(amigosIncluidos.includes(nome)){
        contador++;
        nome = `${nome}-${contador}`
    }
    return nome;

}

function sortear(){
    let erroSorteio = document.getElementById('erro-sorteio');
    if(amigosIncluidos.length >= 3){

        embaralha(amigosIncluidos);
    
        let sorteio =  document.getElementById('lista-sorteio');
        for(let i = 0; i < amigosIncluidos.length; i++){
    
            if(i == amigosIncluidos.length-1){
                sorteio.innerHTML = sorteio.innerHTML+ amigosIncluidos[i] + ' --> ' + amigosIncluidos[0] + '<br>';
            } else {
                sorteio.innerHTML = sorteio.innerHTML+ amigosIncluidos[i] + ' --> ' + amigosIncluidos[i+1] + '<br>';
            }
          
        }

        erroSorteio.textContent = '';
    } else {
        erroSorteio.textContent = 'Erro! Mínimo de 3 pessoas para realizar o sorteio!';
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