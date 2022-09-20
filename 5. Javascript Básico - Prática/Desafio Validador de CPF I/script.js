//Desafui Vakudadir de CPF I
//Parte 5 - Aula 1
//Professor JC Bombardelli
//Data: 31 de maio

console.log("Javascript carregado");

function validaCPF(cpf){
    return true;
}

function validacao() {
    console.log('Iniciando validação CPF');
    
   var cpf = document.getElementById('cpf_digitado').value;
   
   var resultadoValidacao = validaCPF(cpf);

   if (resultadoValidacao) { //teste vai ser true
    document.getElementById('success').style.display = 'block';
   } 
   else {
    document.getElementById('error').style.display = 'block';
   }
}
