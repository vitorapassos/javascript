/**
 * Verificar obrigatoriedade de votar em função da idade seguindo os critérios:
 * 16,17 ou acima de 70 anos - voto facultativo, entre 18 e 70 - voto obrigatório
 * @author Vitor de Assis
 */

// Importar biblioteca
const input = require('readline-sync')

// Limpa tela
console.clear()

// Cabeçalho
console.log("Verificação da obrigatoriedade de voto")

// Variáveis
let idade, retorno

// Entrada
idade = Number(input.question("Digite a sua idade: "))

// Processamento
/** 
if( idade >= 18 && idade <=70){
    retorno = `O voto é obrigatório para pessoas de ${idade} anos`
}else{
    if(( idade == 17 || idade == 16 || idade>70)){
    retorno = `O voto Não é obrigatório para pessoas de ${idade} anos`
}else{
    
}
}*/

if (idade < 16) {
    retorno = `Pessoas com ${idade} anos não podem votar`
} else if (idade >= 18 && idade <= 70) {
    retorno = `O voto é obrigatório para pessoas com ${idade} anos`
} else if (idade == 17 || idade == 16 || idade > 70) {
    retorno = `O voto não é obrigatório para pessoas com ${idade} anos`
}

// Versões do Professor
if (idade < 16) {
    retorno = `Pessoas com ${idade} anos não podem votar`
} else if (idade == 16 || idade == 17 || idade > 70) {
    retorno = `O voto não é obrigatório para pessoas com ${idade} anos`
} else {
    retorno = `O voto é obrigatório para pessoas com ${idade} anos`
}

// Versão do Professor 2
if (idade < 16){
    retorno = `Pessoas com ${idade} anos não podem votar`
} else if (idade > 17 && idade < 71){
    retorno = `O voto é obrigatório para pessoas com ${idade} anos`
} else{
    retorno = `O voto não é obrigatório para pessoas com ${idade} anos`
}

// Saída

console.log(retorno)