function resposta() {
    let nome = document.querySelector("#nome")
    let idade = document.querySelector('#idade')
    let linguagem = document.querySelector('#linguagem')

    alert(`Olá ${nome.value}, você tem ${idade.value} anos e já está aprendendo ${linguagem.value}!`)

    let opcional = prompt(`Voce esta gostando de estudar ${linguagem.value}?`)

    if (opcional == "1") {
        alert(`Muito bom! Continue estudando e você terá muito sucesso.`)
    } else if ( opcional == "2") {
        alert(`Ahh que pena... Já tentou aprender outras linguagens?`)
    }
    nome.value = ""
    idade.value = ""
    linguagem.value = ""
}

let enviar = document.querySelector("#enviar")

enviar.onclick = function responder() {
    resposta()
}