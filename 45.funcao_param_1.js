//trabalhando com funções no Javascript - Utilizando paramêtros
// retorno com console.log interno
function dobra(num) {
    let result = num * 2;
    console.log("O dobro do número informado é " + result);   
}

dobra(6);

// retorno com console.log externamente
function dobro(num) {
    return "O dobro do numero informado é " + num * 2;
    
}

console.log(dobro(6));

//Retorno para contar quantas letras tem um texto ou palavra
function contar_txt(txt) {
    total = txt.lenght;
    console.log("O texto ou a palavra digitada contem" + total + "caracteres");
}
let texto = "Era uma vez em Nova Lima."
contar_txt(texto);