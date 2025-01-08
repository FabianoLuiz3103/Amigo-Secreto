let amigosIncluidos = [];
const  erroVazio = document.getElementById('erro-vazio');
const erroSorteio = document.getElementById('erro-sorteio');

function adicionar(){

    let nomeInformado = document.getElementById('nome-amigo').value.trim();
    let tagNome = document.getElementById('nome-amigo');
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

    atualizarSorteio();
    atualizarListaAmigos();
}

function atualizarSorteio(){
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById("btn-sortear").removeAttribute('disabled');
}

function atualizarListaAmigos(){
    console.log(amigosIncluidos);
    let tagAmigosIncluidos = document.getElementById('lista-amigos');

    tagAmigosIncluidos.innerHTML = '';

    for(let i = 0; i < amigosIncluidos.length; i++){

        let p = document.createElement('p');
        p.textContent = `${amigosIncluidos[i]}, `;
        p.style.display = 'inline';

        p.addEventListener('click', function() {
            excluirAmigo(i);
        });

        tagAmigosIncluidos.appendChild(p);
    }

}

function excluirAmigo(indice){
    amigosIncluidos.splice(indice, 1)
    atualizarSorteio();
    atualizarListaAmigos();
}




function verificarNomesIguais(n){
    let contador = 1;
    let nome = n.toUpperCase();

    while(amigosIncluidos.includes(nome)){
        contador++;
        nome = `${n.toUpperCase()}-${contador}`
    }
    return nome;

}

function sortear(){
    
    if(amigosIncluidos.length >= 3){

        embaralha(amigosIncluidos);
        console.log(amigosIncluidos);
        
    
        let sorteio =  document.getElementById('lista-sorteio');
        for(let i = 0; i < amigosIncluidos.length; i++){
    
            if(i == amigosIncluidos.length-1){
                sorteio.innerHTML = sorteio.innerHTML+ amigosIncluidos[i] + ' --> ' + amigosIncluidos[0] + '<br>';
            } else {
                sorteio.innerHTML = sorteio.innerHTML+ amigosIncluidos[i] + ' --> ' + amigosIncluidos[i+1] + '<br>';
            }
          
        }

        erroSorteio.textContent = '';

        document.getElementById("btn-sortear").setAttribute('disabled', true);

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
    document.getElementById('nome-amigo').classList.remove('form__input_erro');
    erroVazio.textContent ="";
    erroSorteio.textContent = '';
    document.getElementById("btn-sortear").removeAttribute('disabled');

}