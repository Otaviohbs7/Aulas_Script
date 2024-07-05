// Arrays e Objetos

// let numeros ={};

// console.log(typeof numeros);

let cliente ={
    nome: "Fulano",
    idade: 34
};

console.log(`Nome: ${cliente.nome} - idade: ${cliente.idade}`);

cliente.telefone = "(31) 98033-0987"; // Incluir uma nova chave e valor

console.log(`Nome: ${cliente.nome} - idade: ${cliente.idade} - Tel ${cliente.telefone}`);

delete cliente.idade; // Excluir o valor da chave idade

console.log(`Nome: ${cliente.nome} - idade: ${cliente.idade} - Tel ${cliente.telefone}`);

cliente.nome = "Maria"; // atualizar o valor setando a chave correspondente

console.log(`Nome: ${cliente.nome} - idade: ${cliente.idade} - Tel ${cliente.telefone}`);