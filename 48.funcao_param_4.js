//trabalhando com funções no Javascript - Utilizando dois ou mais paramêtros
//Objetos e Arrays

const ler = require('readline-sync');

function criarEvento(nome, local, data, hora, participantes, custoPorPart) {
    let custoTotal = calcularCustoTotal(participantes, custoPorPart);
    return {
        Nome: nome,
        Local: local,
        Data: data,
        Hora: hora,
        Participantes: participantes,
        'Custo por participantes': custoPorPart,
        'Custo Total': custoTotal
    };
    
}

function calcularCustoTotal(part, custoPP) {
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(part * custoPP);
    
}

function cadastrar() {
    

      let nome = ler.question("Informe o nome do Evento: ");
      let local = ler.question("Informe o local do Evento: ");
      let data = ler.question("Informe a data do Evento: ");
      let hora = ler.question("Informe qual o horario do Evento: ");
      let part = ler.question("Informe a quantidade de participantes: ");
      let custoPP = ler.question("Informe o valor que cada um ira pagar: ");

      let EVT = criarEvento(nome, local, data, hora, part, custoPP);
      console.clear();
      exibirevento(EVT);

}

let exibirevento = function(evento) {
    console.log("-------------Informações do Evento ---------------");

    for (let [ chave, valor ] of Object.entries(evento) ) {
        console.log(`=> ${chave} : ${valor}`);
        
    }

    console.log("--------------------------------------------------");

    
}

cadastrar();