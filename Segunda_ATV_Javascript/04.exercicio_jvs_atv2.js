// Atividade 2, Exercicio 4

const ler = require('readline-sync');

let valor = ler.questionFloat("Digite o valor da venda: ");

console.log("-------------Condição de pagamento------------");
console.log(" 1. A vista \n 2. Prazo 30 dias \n 3. Prazo 60 dias \n 4. Prazo 90 dias \n 5. Cartão de Débito");
let opt = ler.questionInt(" => ");
let valorfinal = 0;

switch (opt) {
    case 1:
        
       valorfinal = valor - ((valor * 10) / 100);
       console.log("O valor final da venda é igual a: " + valorfinal);
       break;

    case 2:
        
       valorfinal = valor - ((valor * 5) / 100);
       console.log("o valor final da venda é igual a: " + valorfinal);
        
       break;

    case 3:
    
       console.log("O valor final da venda é igual a: " + valor);
      
       break;

    case 4:
        
       valorfinal = valor + ((valor * 5) / 100);
       console.log("o valor final da venda é igual a: " + valorfinal);
        
       break;
    
    case 5:

       valorfinal = valor + ((valor * 8) / 100);
       console.log("o valor final da venda é igual a: " + valorfinal);
    
       break;

    default:

       console.log("Opção Invalida!!!!");
       break;
}
