//Estrutura de repetição For
//Parte 4 - Aula 5
//Professor JC Bombardelli
//Data: 31 de maio

var numeroSorteado = 10;

var tabuada = 7;

//           pergunta o momento para sair do laço, enquanto o i for menor que 100 (condição de parada)
for(var i = 0; i <= 10; i++) { //incremento de quando vou sair do laço
//primeira parte i é para controle interno dentro do bloco for
//segunda parte é uma pergunta "enquanto i for menor que 100 eu repito"
//terceira parta chegando ao fim do laço, incremntando 1 a cada vez que o laço é executado
    console.log("valor de " + tabuada + " x " + i + " = " + tabuada * i);
}
//tabuada do 7

for (var i = 0; i < 100; i++) {
    if (numeroSorteado === i) {
        console.log('Seu número foi encontrado');
        break; //parada súbita no nosso bloco
    }
}
