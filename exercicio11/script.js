function calcular() {
    let nome = prompt("Qual é o nome do aluno?")
    let notaUm = prompt("Qual foi a primeira nota de " + nome + "?")
    let notaDois = prompt("Além de " + notaUm + ", qual foi a outra nota de " + nome + "?")

    if (isNaN(Number(notaUm)) || isNaN(Number(notaDois))) {
        alert("Digite valores válidos!")
        return;
    }

    if (notaUm && notaDois) {
        let media = (parseFloat(notaUm) + parseFloat(notaDois)) / 2
        let mensagemFinal;

        if (media < 6) {
            mensagemFinal = "Estude um pouco mais!"
        }
        if (media >= 6) {
            mensagemFinal = "Meus parabéns!"
        }

        document.getElementById('paragrafo').innerHTML =

            "Calculando a média final de " + nome + "." +
            "<br><br>As notas obtidas foram " + notaUm + " e " + notaDois + "." +
            "<br><br>A média final será " + media + "." +
            "<br><br>A mensagem que temos é: " + "<span class='classe'>" + mensagemFinal + "</span>"
    }
}