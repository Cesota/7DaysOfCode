let frutas = new Array ();
let laticinios = new Array ();
let congelados = new Array ();
let doces = new Array ();

let listas = [frutas,laticinios,congelados,doces];

let adicionar = "sim"

while(adicionar != "n") {
    adicionar = prompt("Deseja adicionar algum item a lista? responda [S/N]:")
    while(adicionar !="s" && adicionar !="n"){
        alert("Operação não reconhecida! inserir [S/N]!")
        adicionar = prompt("Deseja adicionar algum item a lista? responda [S/N]:")
    }

    if (adicionar == "n") {
        alert(`Lista de Compras:\n Frutas: ${frutas}.\n Laticinios: ${laticinios}.\n Congelados: ${congelados}.\n Doces: ${doces}.\n`)
        break;
    } else {
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
            alert("Categoria não encontrada! por favor escolher entre as opções apresentadas!")
        }
    }
    
}