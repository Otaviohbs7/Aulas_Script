//  Blocos de Variáveis Locais e Globais

let num1 = 100; // Variável global
let num2 = 2;
{
    let num2 = 30; // Variável do tipo local
    console.log(num1);
    console.log(num2);
        {
            console.log(num2);
        }
}

console.log(num1);
console.log(num2);