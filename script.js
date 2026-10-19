
function Avancar() {
    if (confirm("Deseja ir para a próxima página?")) {
        window.location.href = "proximo.html"
    }
    else {
        console.log("O usuário preferiu continuar nesta página.")

    }
}


function Voltar() {
    if (confirm("Deseja voltar para a pagina anterior?")) {
        window.location.href = "index.html"
    }
    else {
        console.log("O usuário preferiu continuar nesta página.")

    }
}