/**
 * Desenvolvimento de uma calculadora
 * @author Vitor de Assis
 */

// Importar bibliotecas
const input = require('readline-sync')

// Deseja realizar outro calculo?
do {

// Limpar tela
console.clear()

// Cabeçalho
console.log("Calculadora")
console.log("_________        .__               .__              .___                    ")
console.log("\\_   ___ \\_____  |  |   ____  __ __|  | _____     __| _/________________    ")
console.log("/    \\  \\/\\__  \\ |  | _/ ___\\|  |  \\  | \\__  \\   / __ |/  _ \\_  __ \\__  \\   ")
console.log("\\     \\____/ __ \\|  |_\\  \\___|  |  /  |__/ __ \\_/ /_/ (  <_> )  | \\// __ \\_ ")
console.log(" \\______  (____  /____/\\___  >____/|____(____  /\\____ |\\____/|__|  (____  / ")
console.log("        \\/     \\/          \\/                \\/      \\/                 \\/  ")



a = Number(input.question("Digite o primeiro numero: "))
console.log(a)
b = Number(input.question("Digite o segundo numero: "))
console.log(b)
// 

console.log("")
console.log("1. Somar")
console.log("2. Subtrair")
console.log("3. Multiplicar")
console.log("4. Dividir")
console.log("5. Calcular a %")
opcao = Number(input.question("Digite a opcao desejada: "))

//

while(opcao > 5 || opcao < 0){
    opcao = Number(input.question("Opcao invalida digite novamente: "))
} 
    switch (opcao){
        case 1:
            // Neste caso só precisei indicar os parâmetros pois na hora de criar a função eu lancei essa informação
            //caso não tivesse colocado os parâmetros também funcionaria 
            somar(a, b)
        break
        case 2:
            subtrair(a, b)
        break
        case 3:
            multiplicar(a, b)
        break
        case 4:
            dividir(a, b)

        break
        case 5:
            porcentagem(a, b)
        break    
    }
    novoCalculo = input.question("Deseja jogar novamente? s/n              ")
    console.log(novoCalculo)
} while (novoCalculo === 's');

// Funções

function somar(a, b){
    return (console.log(`O resultado da soma de ${a} + ${b} = ${a + b}`))
}

function subtrair(a, b){
    return (console.log(`O resultado da subtração de ${a} - ${b} = ${a - b}`))
}

function multiplicar(a, b){
    return (console.log(`O resultado da multiplicação de ${a} x ${b} = ${a * b}`))
}

function dividir(a, b){
    return (console.log(`O resultado da divisão de ${a} / ${b} = ${a / b}`))
}

function porcentagem(a, b){
    return (console.log(`${a}% de ${b} é ${(a*b)/100}`))
} 