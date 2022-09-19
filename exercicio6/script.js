function somar() {
    let numeroum = prompt("Digite um número:");
    let numerodois = prompt("Digite outro número:");

    if (isNaN(Number(numeroum)) || isNaN(Number(numerodois))) {
        alert("Digite valores válidos!");
        return;
    }
        let resultado = parseFloat(numeroum) + parseFloat(numerodois);
        document.getElementById('paragrafo').innerHTML = "A soma entre " + numeroum + " e " + numerodois + " é igual a " + resultado + "!";
}