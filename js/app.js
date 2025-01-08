let amigosIncluidos = [];
function adicionar(){

    let nomeInformado = document.getElementById('nome-amigo').value;
    amigosIncluidos.push(nomeInformado);
    
    let tagAmigosIncluidos = document.getElementById('lista-amigos');
    tagAmigosIncluidos.textContent = amigosIncluidos;

    document.getElementById('nome-amigo').value = ' ';
}