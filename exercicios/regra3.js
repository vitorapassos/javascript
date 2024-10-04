/**
 * Calculo régra de 3
 * @author Vitor de Assis
 */

// Importar biblioteca
const input = require('readline-sync')

// Limpar tela
console.clear()

// Cabeçalho
console.log("Calculo regra de 3")
console.log("x% de y = valor")

// Variáveis
let x, y, valor

// Entrada
x = Number(input.question("Digite o valor de X: "))
y = Number(input.question("Digite o valor de Y: "))

// Processamento
valor = (x * y) / 100

// Saída
console.log(`${x}% de ${y} = ${valor.toFixed(2)}`)