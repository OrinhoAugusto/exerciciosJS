let cont = 0;
let cron;

function contador() {
    cont = cont + 1

    atualizar(cont);
}

function zerar() {
    cont = 0;
    atualizar(cont);
}

function atualizar(c) {
    document.getElementById('spano').innerHTML = c;
}
