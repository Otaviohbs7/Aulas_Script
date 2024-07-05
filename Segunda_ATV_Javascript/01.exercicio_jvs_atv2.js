// Atividade 02, Exercício 01

const ler = require('readline-sync');

let peso = ler.questionFloat("Digite seu peso: ")

console.log("-----------------ESCOLHA UM PLANETA--------------");
console.log(" 1. MERCÚRIO \n 2. VÊNUS \n 3. MARTE \n 4. JÚPITER \n 5. SATURNO \n 6. URANO");
let planet = ler.questionInt(" => ");
let pesoplanet = 0;
console.log("-------------------------------------------------");

switch (planet) {
    case 1:

        pesoplanet = peso * 0.37;
        console.log("Seu peso em Mercúrio é: " + pesoplanet);
        
        break;

    case 2:

        pesoplanet = peso * 0.88;
        console.log("Seu peso em Vênus é: " + pesoplanet);

        break;

    case 3:

        pesoplanet = peso * 0.38;
        console.log("Seu peso em Marte é: " + pesoplanet);

        break;

    case 4:

        pesoplanet = peso * 2.64;
        console.log("Seu peso em Júpiter é: " + pesoplanet);

        break;

    case 5:

        pesoplanet = peso * 1.15;
        console.log("Seu peso em Saturno é: " + pesoplanet);

        break;

    case 6:

        pesoplanet = peso * 1.17;
        console.log("Seu peso em Urano é: " + pesoplanet);

        break;    

    default:

        console.log("Opção invalida!!!!");
        
        break;
}