//trabalhando com funções no Javascript - SIMPLES

function hello() {
    console.log("hello, World");
    
}

function exibirdata() {
    console.log(`Hoje é ${new Date().toDateString()}`);
    
    
}

function contador() {
for (let i = 0; i < 10; i++) {
    console.log(`=> ${i}`);
    
}
    
}

hello();
exibirdata();
contador();
