let visor = document.querySelector("#visor")
visor.value = ""


function adicionar(num) {
    if(num == "+" || num == "-" || num == "*" || num == "/" || num == ".") {
        let valor = visor.value
        if(valor.substr(-1) == "+" || valor.substr(-1) == "-" || valor.substr(-1) == "/" || valor.substr(-1) == "*" || valor.substr(-1) == ".") {
            valor = valor.replace(/.$/, num)
            visor.value = valor;  
        } else {
            visor.value += num; 
        }
    } else {
        visor.value += num; 
    }
}

function calcular() {
    visor.value = eval(visor.value)
}

function voltar() {
    let limpar = visor.value;
    limpar = limpar.replace(/.$/, "")
    visor.value = limpar;
}

function limpar() {
    visor.value = ""
}