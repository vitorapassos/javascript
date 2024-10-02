/**
 * Cálculo do volume de um aquário
 * @author Vitor de Assis
 */

// Importar biblioteca
const input = require('readline-sync')

// Variáveis
let comprimento, largura, altura, volume

// Limpar tela
console.clear()

// Cabeçalho
console.log("Cálculo do volume de um aquário")

// Entrada
comprimento = Number(input.question("Digite o cumprimento em cm: "))
largura = Number(input.question("Digite a largura em cm: "))
altura = Number(input.question("Digite a altura em cm: "))

// Processamento
volume = (comprimento * largura * altura) / 1000

// Saída
console.log(`Volume do aquário: ${volume.toFixed(2)} litros`)