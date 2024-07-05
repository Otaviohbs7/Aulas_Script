//  Filter Elementos dentro de um Array

let nomes = ["Marta","João", "Jonas", "Maria", "Geralda", "Alice"];


let numeros = [12, 34, 51, 5, 8, 11, 78, 41, 23];

let usuarios =[

    {nome: "Marta Rocha", idade: 46, email: "marta@gmail.com"},
    {nome: "Marcos Sena", idade: 24, email: "marcos@outlook.com"},
    {nome: "Luiza Silva", idade: 19, email: "lulu205gmail.com"},
    {nome: "Jonas Maia", idade: 21, email: "jonas@hotmail.com"},
    {nome: "Ricardo Souza", idade: 31, email: "ricardo@gmail.com"},
];

let filtrar_nome = nomes.filter(nome => nome.toLowerCase().includes('j'));
console.log(filtrar_nome);

let filtrar_nums = numeros.filter(num => num > 15);
console.log(filtrar_nums);

let filtrar_idade = usuarios.filter(user => user.idade > 22);
console.table(filtrar_idade);
