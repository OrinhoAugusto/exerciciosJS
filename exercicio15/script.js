const analisar = () => {

    let dia = new Date().getDate()
    let mes = new Date().getMonth()
    let ano = new Date().getFullYear()
    let semana = new Date().getDay()
    let hora = new Date().getHours()
    let minuto = new Date().getMinutes()
    let segundo = new Date().getSeconds()

    document.getElementById('paragrafo').innerHTML =
    `Dia: ${dia}<br><br>Mês: ${mes}<br><br>Ano: ${ano}<br><br>Dia da semana: ${semana}<br><br>Hora ${hora}<br><br>Minutos: ${minuto}<br><br>Segundos: ${segundo}`
}