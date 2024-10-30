/**
 * Tabuada usando a estrutura While
 * @author Vitor de Assis
 */

// Importar Bibliotecas
const input = require('readline-sync')

// Limpar tela
console.clear()

// Cabeçalho
console.log("Tabuada While")

// Variáveis
let valor
let i = 1 // apoio a lógica e laço while

//Entrada
valor = Number(input.question("Digite o valor da tabuada: "))

// Processamento

while(i < 11){
    console.log(`${valor} x ${i} = ${valor * i}`)
    i++
}