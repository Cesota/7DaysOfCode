let resposta = Math.floor(Math.random() * (10 - 0) + 1);

let chute = "";
let tentativas = 3

for (c=0; c<3; c++) {
    chute = prompt("Chute um numero de 0 a 10:");
    if (chute == resposta) {
        alert(`Parabéns, voce acertou! O numero era ${resposta}.`)
        break;
    } else {
        if (tentativas > 1) {
            tentativas = tentativas - 1
            alert(`Resposta errada! voce tem mais ${tentativas} tentativas!`)
        } else {
            tentativas = tentativas - 1
            alert(`Infelizmente, você não acertou. O número era ${resposta}!`);
        }
    }
}

    