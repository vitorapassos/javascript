/**
 * Input de dados via terminal
 * Uso do pacote/biblioteca readline-sync
 * @author Vitor de Assis
 */

// Importar o/a pacote/biblioteca
const input = require('readline-sync')

let nome

console.clear()

nome = input.question("Digite seu nome: ")
console.log(`Hello ${nome}`)