function calcular() {
    let numero = prompt("Digite um número:")

    if (isNaN(Number(numero))) {
        alert("Digite um valor válido!")
        return;
    }

    let valorAbsoluto = Math.abs(numero);
    let parteInteira = Math.trunc(numero);
    let inteiroProximo = Math.round(numero);
    let raizQuadrada = Math.sqrt(numero);
    let raizCubica = Math.cbrt(numero);
    let aoQuadrado = Math.pow(numero, 2);
    let aoCubo = Math.pow(numero, 3);

    document.getElementById('paragrafo').innerHTML =
    "O número a ser analisado aqui será o " + numero +
    "<br>O seu valor absoluto é " + valorAbsoluto +
    "<br>A sua parte inteira é " + parteInteira +
    "<br>O valor inteiro mais próximo é " + inteiroProximo +
    "<br>A sua raiz quadrada é " + raizQuadrada +
    "<br>A sua raiz cúbica é " + raizCubica +
    "<br>O valor de " + numero + "² é " + aoQuadrado +
    "<br>O valor de " + numero + "³ é " + aoCubo

}