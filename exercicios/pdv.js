/**
 * Projeto PDV (Desconto e Troco)
 * @author Vitor de Assis
 */

// Importar bibliotecas
const input = require('readline-sync')

// Limpar console
console.clear()

// Variáveis
let valorTotal, percentualDesconto, valorDesconto, valorPago, valorTroco, totalDesconto

// Cabeçalho
console.log("          _____                            _____                            _____          ")
console.log("         /\\    \\                          /\\    \\                          /\\    \\         ")
console.log("        /::\\    \\                        /::\\    \\                        /::\\____\\        ")
console.log("       /::::\\    \\                      /::::\\    \\                      /:::/    /        ")
console.log("      /::::::\\    \\                    /::::::\\    \\                    /:::/    /         ")
console.log("     /:::/\\:::\\    \\                  /:::/\\:::\\    \\                  /:::/    /          ")
console.log("    /:::/__\\:::\\    \\                /:::/  \\:::\\    \\                /:::/____/           ")
console.log("   /::::\\   \\:::\\    \\              /:::/    \\:::\\    \\               |::|    |            ")
console.log("  /::::::\\   \\:::\\    \\            /:::/    / \\:::\\    \\              |::|    |     _____  ")
console.log(" /:::/\\:::\\   \\:::\\____\\          /:::/    /   \\:::\\ ___\\             |::|    |    /\\    \\ ")
console.log("/:::/  \\:::\\   \\:::|    |        /:::/____/     \\:::|    |            |::|    |   /::\\____\\ ")
console.log("\\::/    \\:::\\  /:::|____|        \\:::\\    \\     /:::|____|            |::|    |  /:::/    / ")
console.log(" \\/_____/\\:::\\/:::/    /          \\:::\\    \\   /:::/    /             |::|    | /:::/    / ")
console.log("          \\::::::/    /            \\:::\\    \\ /:::/    /              |::|____|/:::/    /  ")
console.log("           \\::::/    /              \\:::\\    /:::/    /               |:::::::::::/    /   ")
console.log("            \\::/____/                \\:::\\  /:::/    /                \\::::::::::/____/    ")
console.log("             ~~                       \\:::\\/:::/    /                  ~~~~~~~~~~          ")
console.log("                                       \\::::::/    /                                       ")
console.log("                                        \\::::/    /                                        ")
console.log("                                         \\::/____/                                         ")
console.log("                                          ~~                                               ")
                                                                                      
// Entrada 1
valorTotal =  Number(input.question("Todal da compra: R$ "))
percentualDesconto = Number(input.question("Digite o percentual de desconto: "))

// Processamento 1
valorDesconto =  (valorTotal * percentualDesconto) / 100

// Processamento2
totalDesconto = valorTotal - valorDesconto

// Saída 1
console.log("")
console.log("----------------------------------")
console.log(`Total: R$ ${valorTotal.toFixed(2)}`)
console.log(`Percentual de desconto: ${percentualDesconto}%`)
console.log(`Valor de desconto: R$ ${valorDesconto.toFixed(2)}`)
console.log(`Total com desconto: R$ ${totalDesconto.toFixed(2)}`)
console.log("")

// Entrada 2
valorPago = Number(input.question("Digite o valor pago: R$ "))

// Processamento 3
valorTroco = valorPago - totalDesconto

// Saída 2
console.log("")
console.log(`Valor pago em dinheiro: R$ ${valorPago.toFixed(2)}`)
console.log(`Troco: R$ ${valorTroco.toFixed(2)}`)
console.log("----------------------------------")