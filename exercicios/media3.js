/**
 * Cálculo da média aritmética de 3 valores
 * @author Vitor de Assis
 */

// importar a biblioteca
const input = require('readline-sync')

// variaveis
let num1, num2, num3, media

console.clear()
console.log("Calculo da média aritmética de 3 números")

// entrada 
// No console entradas(input) numéricas precisam ser convertidas com uso do método Number()
num1 = Number(input.question("Digite o primeiro numero: "))
num2 = Number(input.question("Digite o segundo numero: "))
num3 = Number(input.question("Digite o terceiro numero: "))

// processamento
media = (num1 + num2 + num3) / 3

// saida
console.log(`Media: ${media}`)