//Estrutura de Repetição While
//Parte 4 - Aula 6
//Professor JC Bombardelli
//Data: 31 de maio

//Laço de repetição While (enquanto)
//Enquanto algo for verdadeiro, repita (não tem parada, limite de parada)

var achou = false;

var tabuada = 7;
var repeticoes = 10

// while (!achou) {
//     console.log('Achou'); //
// }
//looping

// while (repeticoes <= 10) {
//     var resultado = tabuada * repeticoes;
//     console.log(resultado);
// }
//looping

var numeroSorteado = 10;
var possivelValor = 0;

while(!achou) {
    possivelValor += 1;
    if(numeroSorteado === possivelValor) {
        achou = true
    } else {
         console.log("Possivel valor não corresponde ao numero sorteado " + possivelValor)
    }
}
//Utilização do While é parecido com o For(sabe quando vai parar, inicio e fim) porém é utilizando:
//Quando nao sei exatamente quando vou parar
//Precisamos criar uma Flag(bandeira) = item dentro do While para mostrar a hora de parar

