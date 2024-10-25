/**
 * Tabuada
 * @author Vitor de Assis
 */

// Importar biblioteca
const input = require('readline-sync')

// Limpar tela
console. clear()

// Cabeçalho
console.log("Tabuada")

// Variáveis
let valor

// Entrada
valor = Number(input.question("Digite o valor da tabuda: "))

for (let i = 1; i < 11; i++){
    console.log(`${valor} x ${i} = ${valor * i}`)
}
