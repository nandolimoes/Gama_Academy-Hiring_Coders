//Condicionais
//Parte 4 - Aula 4
//Professor JC Bombardelli
//Data: 31 de maio

//Significa que eu tenho que tomar uma decisão sobre uma pergunta ou um tipo de informação que acabou de chegar
//condicionais pra isso usamos a estrutura if

// = atribuição
//armazena aqui = pega a informação aqui

var nome = "Carlos";
if (nome === "Fernando") {
    console.log("Legal! Seu nome é este mesmo " + nome);
} else if (nome === "João") {
    console.log("Tudo bem! Você também serve");
} else {
    console.log("Que pena seu nome não é Fernando ele é " + nome);
}

//Código não pode ser grande, tem que ser o mais enxuto possível

//Switch

var nome2 = "Limões";

switch (nome2) {
    case "Fernando":
        console.log("Legal! Você é o Fernando mesmo!");
        break;
    case "Limões":
        console.log("Ah legal! Você também serve");
        break;
    default:
        console.log("Que pena! Você não é quem u stou procurando");
        break;
}

