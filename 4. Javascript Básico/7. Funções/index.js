//Funções
//Parte 4 - Aula 7
//Professor JC Bombardelli
//Data: 31 de maio

//Serve para armazenar um bloco de código que pode ser utilizado e reutilizado quantas x a gente quiser

function soma(operadorA, operadorB) {
    var resultadoC = operadorA + operadorB;
    return resultadoC;
}
function olaGama(nome) {
    console.log("Olá Gama! Você é o " + nome);
}

var resultadoDaSoma = soma(1,2); //3
var resultadoNovoDaSoma = soma(10, 66); //76

console.log(resultadoDaSoma);
console.log(resultadoNovoDaSoma);

olaGama("Fernando");


