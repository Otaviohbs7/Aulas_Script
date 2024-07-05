// Atividade 3 Exercício 12

const alt1carlos = 1.85;
const alt1rodrigo = 1.78;

const cresccarlos = 2; 
const crescrodrigo = 5; 

const crescmetrocarlos = cresccarlos / 100; 
const crescmetrodrigo = crescrodrigo / 100; 

let anos = 0;

let alturacarlos = alt1carlos;
let alturarodrigo = alt1rodrigo;

while (alturarodrigo <= alturacarlos) {
    alturacarlos += crescmetrocarlos;
    alturarodrigo += crescmetrodrigo;
    anos++;
}

console.log("Serão necessários - " + anos + " - anos para que Rodrigo seja maior que Carlos.");
