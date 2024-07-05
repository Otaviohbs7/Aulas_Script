// Atividade 01 Exercício 17

const ler = require('readline-sync');

let h1 = ler.questionInt("Digite idade do homem 1: ");
let h2 = ler.questionInt("Digite idade do homem 2: ");

let m1 = ler.questionInt("Digite idade da mulher 1: ");
let m2 = ler.questionInt("Digite idade da mulher 2: ");

if (h1 > h2) {
    if (m1 > m2) {
        let soma1 = h1 + m2;
        let soma2 = h2 + m1;
        console.log("A soma da idade do homem mais velho com a mulher mais nova é: " + soma1);
        console.log("A soma da idade do homem mais novo com a mulher mais velha é: " + soma2);
    } else {
        let soma1 = h1 + m1;
        let soma2 = h2 + m2;
        console.log("A soma da idade do homem mais velho com a mulher mais nova é: " + soma1);
        console.log("A soma da idade do homem mais novo com a mulher mais velha é: " + soma2);
    }
} else {
    if (m1 > m2) {
        let soma1 = h2 + m2;
        let soma2 = h1 + m1;
        console.log("A soma da idade do homem mais velho com a mulher mais nova é: " + soma1);
        console.log("A soma da idade do homem mais novo com a mulher mais velha é: " + soma2);
    } else {
        let soma1 = h2 + m1;
        let soma2 = h1 + m2;
        console.log("A soma da idade do homem mais velho com a mulher mais nova é: " + soma1);
        console.log("A soma da idade do homem mais novo com a mulher mais velha é: " + soma2);
    }
}

