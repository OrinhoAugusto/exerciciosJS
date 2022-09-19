function alerta() {

    let resultado = prompt("Qual é o seu nome?");

    if (resultado) {
        document.getElementById('paragrafo').innerHTML = "Olá, " + resultado + "! É um prazer te conhecer!";
    }
}