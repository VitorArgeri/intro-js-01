let contador = 0;

function atualizarContador() {
    document.getElementById('num').innerText = contador;
}

function somar() {
    contador++
    atualizarContador()
}

function subtrair() {
    contador--
    atualizarContador()
}

function resetar() {
    contador = contador * 0
    atualizarContador()
}