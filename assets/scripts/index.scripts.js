function exibirNome() {
    let nome = document.getElementById('nome').value;
    // console.log("Texto digitado: ", nome);
    document.getElementById('msg').innerHTML = `Olá, ${nome}!`;
}
