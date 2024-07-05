// Atividade 06, Exercicio 04

const ler = require('readline-sync');

let netflix = [
    {nome: "Gente Grande", tipo: "comédia", avaliacao: 7},
    {nome: "Homem aranha", tipo: "ação", avaliacao: 8},
    {nome: "American Pie", tipo: "comédia", avaliacao: 7},
    {nome: "Gladiador", tipo: "ação", avaliacao: 6},
    {nome: "Atividade Paranormal", tipo: "terror", avaliacao: 7},
    {nome: "Vingadores", tipo: "ação", avaliacao: 8},
    {nome: "As branquelas", tipo: "comédia", avaliacao: 7},
    {nome: "Premonição", tipo: "terror", avaliacao: 7},
    {nome: "Top Gun: Maverick", tipo: "ação", avaliacao: 9},
    {nome: "A Entidade", tipo: "terror", avaliacao: 9},
    {nome: "Intocaveis", tipo: "comedia", avaliacao: 8}
];

let usuarios = []

let x = 1;

while (x<=3) {
    console.log(`\nUsuário ${x} =>\n`);

    let avaliacaoacao = ler.questionInt("Informe de 0 a 10 o quanto gosta de acao: ");
    let avaliacaoterror = ler.questionInt("Informe de 0 a 10 o quanto gosta de terror: ");
    let avaliacaocomedia = ler.questionInt("Informe de 0 a 10 o quanto gosta de comedia: ");

    usuarios.push({comedia: avaliacaocomedia, terror: avaliacaoterror, acao: avaliacaoacao});

    x++;

}  

console.log("---------------Filmes recomendados-------------");

let i = 0
for (let avaliacao of usuarios) {
    
    console.log(`Usuário: ${i + 1}`);
    if (avaliacao.acao > avaliacao.comedia) {
        if (avaliacao.acao > avaliacao.terror) {

            let filmesacao = netflix.filter(x => x.tipo.includes("ação"));
            console.table(filmesacao);

        } else {

            let filmesterror = netflix.filter(x => x.tipo.includes("terror"));
            console.table(filmesterror);

        }
    } else if (avaliacao.acao < avaliacao.comedia){
        
        if (avaliacao.comedia > avaliacao.terror) {
            
            let filmescomedia = netflix.filter(x => x.tipo.includes("comédia"));
            console.table(filmescomedia);

        } else {

            let filmesterror = netflix.filter(x => x.tipo.includes("terror"));
            console.table(filmesterror);
        }
    } else if (avaliacao.acao == avaliacao.comedia){
        if (avaliacao.acao > avaliacao.terror) {

            let filmesacao = netflix.filter(x => x.tipo.includes("ação"));
            console.table(filmesacao);
            let filmescomedia = netflix.filter(x => x.tipo.includes("comédia"));
            console.table(filmescomedia);

        } else {

            let filmesterror = netflix.filter(x => x.tipo.includes("terror"));
            console.table(filmesterror);

        }

}
i++;
}