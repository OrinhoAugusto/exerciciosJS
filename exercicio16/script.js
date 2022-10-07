    let anoNascimento = prompt("Em que ano você nasceu?")
    let ano = new Date().getFullYear()
    let idade = ano - anoNascimento
    let mensagem = `Você fará/fez ${idade} anos em ${ano}`
    console.log(mensagem)