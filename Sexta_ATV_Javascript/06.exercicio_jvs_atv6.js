// Atividade 06, Exercicio 06

let contcand1 = 0, contcand2 = 0, contcand3 = 0, contfinal = 0;
let vencedor;

console.log("----------------- SIMULAÇÃO ELEIÇÕES 2024 ------------------");

let eleicao = {
    cand1: [
        {nome: "Adilson Braga"},
        {nome: "Marlon Silverio"}
    ],
    cand2: [
        {nome: "Andre Souza"},
        {nome: "Felipe Almeida"},
        {nome: "Carlos Pereira"},
        {nome: "Lucas Almeida"},
        {nome: "Lara Batista"}
    ],
    cand3: [
        {nome: "Andreia da Silza"},
        {nome: "Ana Beatriz"},
        {nome: "Isadora Ribeiro"}
    ],
};

eleicao.cand1.forEach(can1 => {
    contcand1++;
});

eleicao.cand2.forEach(can2 => {
    contcand2++;
});

eleicao.cand3.forEach(can3 => {
    contcand3++;
});

if (contcand1 > contcand2 && contcand1 > contcand3) {
    vencedor = "Candidato 1";
    contfinal = contcand1;
} else if(contcand2 > contcand1 && contcand2 > contcand3) {
    vencedor = "Candidato 2";
    contfinal = contcand2;
} else {
    vencedor = "Candidato 3";
    contfinal = contfinal;
}

console.log(`- O Vencedor é o Candidato - ${vencedor} - com - ${contfinal} - Votos`);

console.log("-----------------------------------------------------------------------");