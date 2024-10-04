/**
 * Cálculo do consumo de combustível
 * @author Vitor de Assis
 */

// Importar bibliotecas
const input = require('readline-sync')

// Limpa tela
console.clear()

// Cabeçalho
console.log("Cálculo do consumo de combustível")

// Variáveis
let distancia, litros, consumo

// Entrada
distancia = Number(input.question("Distancia percorrida em km: "))
litros = Number(input.question("Litros de combustivel: "))

// Processamento
consumo = distancia/litros

// Saída
console.log(`Consumo: ${consumo.toFixed(1)} km/l`)