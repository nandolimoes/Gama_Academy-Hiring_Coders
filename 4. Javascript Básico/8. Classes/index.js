//Classes
//Parte 4 - Aula 8
//Professor JC Bombardelli
//Data: 31 de maio

//Muito comum quando se fala em POO falar de classes
//Em JS não é uma obrigatoriedade como Java e C#, porém há uma vertente que utiliza JS que fala que pode utilizar classes e não tem problema nisso
//Classes em Javascript provêm uma maneira mais simples e clara de criar objetos e lidar com herança

class Matematica {

    soma(valorA, valorB) {
    //função
    return valorA + valorB;
    }
    subtracao(valorA, valorB) {
        return valorA - valorB;
    }
    multiplicacao(valorA, valorB) {
        return valorA * valorB
    }
    divisao(valorA, valorB) {
        return valorA / valorB
    }
}

var instanciaMatematica = new Matematica();

var resultado = instanciaMatematica.soma(4,7); //11
var resultado2 = instanciaMatematica.subtracao(4,1) //3

console.log(resultado);
console.log(resultado2);
