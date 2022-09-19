function calcular() {
    let aluno = prompt("Qual é o nome do aluno?")
    let notaum = prompt("Qual foi a primeira nota de " + aluno + "?")
    let notadois = prompt("Além de " + notaum + ", qual foi a outra nota de " + aluno + "?")

    if (isNaN(Number(notaum)) || isNaN(Number(notadois))) {
        alert("Digite valores válidos!");
        return;
    }

    if (notaum == "") {
        notaum = 0;
    }

    if (notadois == "") {
        notadois = 0;
    }

    let media = (parseFloat(notaum) + parseFloat(notadois)) / 2;
    document.getElementById('paragrafo').innerHTML =
    "</br>Calculando a média final de " + aluno + "." +
    "</br> As notas obtidas foram " + notaum + " e " + notadois + "." +
    "</br> A média final será " + media + "."


}