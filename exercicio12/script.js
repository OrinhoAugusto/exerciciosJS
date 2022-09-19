function calcular() {
    let numero = prompt("Digite um número:")
    let resultado = numero % 2 == 0 ? 'PAR!' : 'ÍMPAR!'
    document.getElementById('paragrafo').innerHTML = `O número ${numero} que foi digitado é <span class='classe'>${resultado}</span>`
}