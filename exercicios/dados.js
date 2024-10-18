/**
 * Exemplo de uso do método para gerar numeros aleatórios
 * Jogo do dado
 * @author Vitor de Assis
 */

// Importar biblioteca
const input = require('readline-sync')

// Limpar a tela
console.log()

// Variáveis
let face

console.log("Jogo do dado")
input.question("Pressione a tecla [Enter] para jogar o dado")

// Sorteio da face de um dado

// Math classe matemática

// floor conversão para numeros inteiros

// random() * (gerador de números aleatórios)

face = Math.floor(Math.random() * 6 + 1) // 0 1 2 3 4 5 6
console.log(`Face do dado ${face}`)