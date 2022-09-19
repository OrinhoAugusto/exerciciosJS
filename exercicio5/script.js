function calcular() {
    let numero = prompt("Digite um número:");
    if (isNaN(Number(numero))) {
        
        alert("Digite um valor válido!");
        return;
    }

    let dobro = numero * 2;
    let metade = numero / 2;
    document.getElementById('paragrafo').innerHTML = "O dobro de " + numero + " é " + dobro + " e a metade é " + metade + "!";

}
