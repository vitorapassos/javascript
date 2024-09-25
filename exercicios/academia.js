/**
 * Ficha de um aluno de academia
 * @author Vitor de Assis
 */

// variáveis
let nome
let idade
let peso
let altura
let vip
let fcm
let imc


console.clear()

// entrada de dados
nome = "Vitor de Assis"
idade = 25
peso = 70
altura = 1.71
vip = true

// processamento
fcm = 208 - ( 0.7 * idade)
imc = peso / (altura * altura)

// saída
console.log(" ***Ficha do Aluno***")
console.log("_____________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`VIP: ${vip}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)