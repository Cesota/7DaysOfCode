let primeiroTeste = "0"
while (primeiroTeste == "0") {
    let area = prompt("Voce deseja seguir para área de Front-End ou para a área de Back-End?")
    if (area == "Front-End" || area == "front-end" || area == "front") {
        let linguagem = prompt("Deseja aprender React ou Vue?")
        primeiroTeste = "1"
    } else if (area == "Back-End" || area == "back-end" || area == "back") {
        let linguagem = prompt("Deseja aprender C# ou Java?")
        primeiroTeste = "1"
    } else {
        alert("responda corretamente!")
    }
}

let especializar = prompt("Deseja seguir se especializando na área escolhida?")
let fullstack = prompt("Deseja seguir se desenvolvendo para se tornar Fullstack?")

let segundoTeste = "S"
while (segundoTeste == "S" || segundoTeste == "s") {
    segundoTeste = prompt("Voce deseja aprender alguma outra tecnologia?")
    if (segundoTeste == "S" || segundoTeste == "s") {
        let tecnologia = prompt("Qual tecnologia voce deseja aprender?")
        alert(`Muito interessante! boa sorte nos estudos de ${tecnologia}`)
    }
}
