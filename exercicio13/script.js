const calcular = () => {
    let numeroUm = prompt("Digite um número:")
    let numeroDois = prompt("Digite um número:")
    let maiorValor;

    if (numeroUm > numeroDois) {
        maiorValor = numeroUm
    }
    if (numeroUm < numeroDois) {
        maiorValor = numeroDois
    }

    document.getElementById('paragrafo').innerHTML = `Analisando os valores ${numeroUm} e ${numeroDois}, o maior valor é ${maiorValor}.`
}