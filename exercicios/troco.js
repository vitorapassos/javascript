/**
 * Calculo de Troco
 * @author Vitor de Assis
 */

// Importar bibliotecas
const input = require('readline-sync')

// Limpar tela
console.clear()

// Variáveis
let valorPago, valorTotal, valorTroco

// Entrada
valorTotal = Number(input.question("Digite o valor total da compra em reais: R$ "))
valorPago = Number(input.question("Digite o valor pago em reais: R$ "))

// Processamento
valorTroco = valorPago - valorTotal

//Saida
console.log(`O valor do troco é de R$ ${valorTroco.toFixed(2)}`)