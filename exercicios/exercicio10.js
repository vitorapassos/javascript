/**
 * 10) Cálculo do tempo de viagem:
 * Desenvolva um programa que calcule o tempo necessário para uma viagem. O usuário deve fornecer a 
 * distância a ser percorrida e a velocidade média do veículo. O programa deve calcular e exibir o tempo de viagem.
 * 
 * 
 * // variáveis
 * tempoDaViagem
 * distancia
 * velocidadeMedia
 * 
 * // entrada
 * 
 * // processamento
 * tempoDaViagem = distancia/velocidade
 * 
 * // saida
 * tempoDaViagem
 * @author Vitor de Assis 
 */

// importar biblioteca de leitura de dados (input)
const input = require('readline-sync')

// variáveis
let tempoDaViagem, distancia, velocidadeMedia

// limpar console(UX)
console.clear()

// nome do exercício
console.log("Calculo do tempo de viagem")

// entrada
distancia = Number(input.question("Digite a distancia que sera percorrida em Km: "))
velocidadeMedia = Number(input.question("Digite a velocidade media em Km/h: "))

// processamento
tempoDaViagem = distancia/velocidadeMedia

// saída
console.log(`O tempo estimado e de ${tempoDaViagem} horas`)