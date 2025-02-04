function somar() {
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);
    document.getElementById('result').innerHTML = numA + numB;
}

function subtrair() {
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);
    document.getElementById('result').innerHTML = numA - numB;
}

function multiplicar() {
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);
    document.getElementById('result').innerHTML = numA * numB;
}

function dividir() {
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);
    document.getElementById('result').innerHTML = numA / numB;
}

