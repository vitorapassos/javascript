/**
 * APP - calculadora de saúde
 * @author Vitor de Assis
 */

// bibliotecas
const input = require ('readline-sync')
const colors = require('colors')

// variáveis
let nome, idade, peso, altura, fcm, imc, consumo

// Limpa tela
console.clear()
              
// Cabeçalho/Banner
console.log(" _   _ _____ ___  _    _____ _   _   _____  ___  _     _____ _   _ _      ___ _____ ___________ ")
console.log("| | | |  ___/ _ \\| |  |_   _| | | | /  __ \\/ _ \\| |   /  __ \\ | | | |    / _ \\_   _|  _  | ___ \\")
console.log("| |_| | |__/ /_\\ \\ |    | | | |_| | | /  \\/ /_\\ \\ |   | /  \\/ | | | |   / /_\\ \\| | | | | | |_/ /")
console.log("|  _  |  __|  _  | |    | | |  _  | | |   |  _  | |   | |   | | | | |   |  _  || | | | | |    / ")
console.log("| | | | |__| | | | |____| | | | | | | \\__/\\ | | | |___| \\__/\\ |_| | |___| | | || | \\ \\_/ / |\\ \\ ")
console.log("\\_| |_|____|_| |_|_____/\\_/ \\_| |_/  \\____|_| |_|_____/\\____/\\___/\\_____|_| |_/\\_/  \\___/\\_| \\_|")

// entrada de dados
nome = input.question("Digite o seu nome: ")
idade = Number(input.question("Digite a sua idade: "))
peso = Number(input.question("Digite o seu peso em kg: "))
altura = Number(input.question("Digite a sua altura em metros: "))

// processamento
fcm = 208 - ( 0.7 * idade)
imc = peso / (altura * altura)
consumo = peso * 0.035
console.log(imc)


// saída
console.log("")
console.log(" ***Ficha do Aluno***")
console.log("_____________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)

//tabela IMC
if (imc < 18.5) {
    console.log("Abaixo do peso".cyan)    
} else if(imc < 25){
    console.log("Peso normal".green)    
}else if(imc <30){
    console.log("Levemente acima do peso".yellow)
}else if(imc <35){
    console.log("Obesidade Grau I".yellow)
}else if(imc < 40){
    console.log("Obesidade Grau II (Severa)".red)
} else {
    console.log("Obesidade grau III (Morbida)".bgRed)
}

// Consumo de água

console.log(`Consumir por dia ${consumo.toFixed(3)} litros de água`)