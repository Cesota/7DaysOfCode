let frutas = new Array ();
let laticinios = new Array ();
let congelados = new Array ();
let doces = new Array ();

let rodar = "adicionar"

let validador = false

while(rodar != "finalizar") {

    if(validador == false) {
        validador = validaListas()
    }

    if (validador == true) {
        rodar = prompt("Deseja 'adicionar', 'remover' ou 'finalizar':")
        while(rodar != "adicionar" && rodar != "remover" && rodar != "finalizar") {
            alert("[ERRO] Responda uma das opçoes apresentadas!")
            rodar = prompt("Deseja 'adicionar', 'remover' ou 'finalizar':")
        }
    }

    if (rodar == "adicionar") {
        adicionarItem()
    } else if (rodar == "remover") {
        removerItem()
    } else if (rodar == "finalizar") {
        listaDeCompras()
        break;
    }
}

function adicionarItem() {
    let item = prompt('Qual item deseja adicionar?')
    let lista = prompt("Qual a categoria desse item? escolha um numero: 1-frutas, 2-laticinios, 3-congelados, 4-doces.")
    if(lista == "1") {
        frutas.push(item)
    } else if (lista == "2") {
        laticinios.push(item)
    } else if (lista == "3") {
        congelados.push(item)
    } else if (lista == "4") {
        doces.push(item)
    } else {
        alert("Categoria não encontrada! por favor refaça a operação")
    }  
}

function removerItem() {
   let remover = prompt(`Lista de Compras:\n Frutas: ${frutas}.\n Laticinios: ${laticinios}.\n Congelados: ${congelados}.\n Doces: ${doces}.\nQual item deseja remover?`)
   if(frutas.includes(remover)) {
        frutas.splice(frutas.indexOf(remover), 1)
        alert(`Lista de Compras:\n ${frutas}\n\nItem removido com sucesso!`)
   } else if (laticinios.includes(remover)) {
    laticinios.splice(laticinios.indexOf(remover), 1)
        alert(`Lista de Compras:\n ${laticinios}\n\nItem removido com sucesso!`)
   } else if (congelados.includes(remover)) {
    congelados.splice(congelados.indexOf(remover), 1)
        alert(`Lista de Compras:\n ${congelados}\n\nItem removido com sucesso!`)
   } else if (doces.includes(remover)) {
    doces.splice(doces.indexOf(remover), 1)
        alert(`Lista de Compras:\n ${doces}\n\nItem removido com sucesso!`)
   } else {
        alert("Não foi possível encontrar o item dentro da lista!")
   }
}

function listaDeCompras() {
    alert(`Lista de Compras:\n Frutas: ${frutas}.\n Laticinios: ${laticinios}.\n Congelados: ${congelados}.\n Doces: ${doces}.\n`)
}

function validaListas() {
    if(frutas.length > 0 || laticinios.length > 0 || congelados.length > 0 || doces.length > 0) {
        return true
    } else {
        return false
    }
}