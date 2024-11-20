/**
 * Cálculo consumo de água
 * @author Vitor de Assis
 */

// Importar biblioteca
const input = require('readline-sync')

// Limpar tela
console.clear()
console.log(typeof(input))
// Cabeçalho
console.log("Cálculo do consumo de água por dia")

// Variáveis
let consumo, peso

// Entrada
peso = Number(input.question("Digite o seu peso em kg: "))

// Processamento
consumo = peso * 0.035

//Saída
console.log(`O onsumo ideal para pessoas com ${peso}kg é de ${consumo.toFixed(2)} litros/dia `)