/**
 * Calculo do valor do desconto
 * @author Vitor de Assis
 */

// Importar biblioteca
const input = require('readline-sync')

// Variáveis
let valorDoProduto, percentualDesconto, valorFinal

// Limpar tela
console.clear()

// Cabeçalho
console.log("Calculo do valor do desconto")

// Entrada
valorDoProduto = Number(input.question("Digite o valor do produto em reais: "))
percentualDesconto = Number(input.question("Digite o percentual de desconto: "))

// Processamento
valorFinal = valorDoProduto - ((valorDoProduto*percentualDesconto) / 100)

//Saída
console.log(`O valor com desconto é R$ ${valorFinal.toFixed(2)}`)
