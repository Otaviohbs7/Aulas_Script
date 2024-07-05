//trabalhando com funções no Javascript - Utilizando dois ou mais paramêtros

//Sistema de conversão de moedas

const ler = require('readline-sync');

(async () => { const {default: cor} = await import('chalk');

const DOLAR = 5.50, EURO = 6.05, LIBRA = 7.12, IENE = 0.033;

function dolar(valor) { let result = valor / DOLAR; return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(result);}

function euro(valor) { return new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR' }).format(valor / EURO);}

function libra(valor) { let result = valor / LIBRA; return new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP' }).format(result);}

function iene(valor) { return new Intl.NumberFormat('ja-JP', {style: 'currency', currency: 'JPY' }).format(valor / IENE);}


function converterMoeda(valor, moeda) {
    switch (moeda) {
        case 1: //dolar
            dolar(valor);
            console.log(cor.green("O valor informado convertido para dólar é:"));
            console.log(cor.blue(`=> ${dolar(valor)}`));
            break;
        
            case 2: //euro
                euro(valor);
                console.log(cor.yellow("O valor informado convertido para euro é:"));
                console.log(cor.blue(`${euro(valor)}`));
                break;   
                
                case 3: // libra
                    libra(valor);
                    console.log(cor.red("O valor informado convertido para libra é: "));
                    console.log(cor.blue(`${libra(valor)}`));
                    break; 

                    case 4: // iene
                        iene(valor);
                        console.log(cor.white("O valor informado convertido para iene é:" ));
                        console.log(cor.blue(`${iene(valor)}`));
                        break;
    
        default:
            break;
    }
}

function menu() {
    let valor = ler.questionFloat(cor.greenBright("Informe um valor em Reais: "));
    console.log(cor.bgBlue("------------------------MENU de Câmbio---------------------"));
    console.log(cor.magenta("-- Selecione qual moeda deseja realizar a conversão --"));
    console.log(cor.cyan("1. DOLAR -------------------"));
    console.log(cor.cyan("2. EURO -------------------"));
    console.log(cor.cyan("3. LIBRA -------------------"));
    console.log(cor.cyan("4. IENE -------------------"));
    let opt = ler.questionInt("=> ");
    converterMoeda(valor, opt);
}

menu();

})();