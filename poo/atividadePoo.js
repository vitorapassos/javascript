/**
 * Atividade PROGRAMAÇÃO ORIENTADA A OBJETOS - POO
 * @author Vitor de Assis
 */

// Limpar tela
console.clear()


// Classe modelo
class Carro {
    // Atributos básicos do carro
    constructor(ano, cor) {
        this.cor = cor
        this.ano = ano
    }

    // Métodos do carro   
    // Criar carro
    criarCarro() {
        console.log("🔧 Tic tic tic tic 🔧")
        console.log("Você montou o carro do ano! ")
        console.log(`Ano: ${this.ano}`)
        console.log("")
        console.log(`A cor escolhida da sua nave é ${this.cor}`)
        console.log("")
        console.log("Agora é só sair andando 🤝")
        console.log("")
        
    }

    ligar() {
        console.log("🚙 TCHU GU DJUGU DJUGU 🚙 carro ligado")
    }

    acelerar() {
        console.log("🏎️  VRUM VRUM.... 🏎️ ")
    }

    desligar() {
        console.log("🔑 Carro desligado 🔑")
    }
}


// Exemplo de herança
class Aviao extends Carro {
    // Atributos
    constructor(ano, cor, modelo, companhia) {
        // Super é tudo que for herdado da Classe Mãe
        super(ano, cor)
        // This são atributos da própria classe
        this.modelo = modelo
        this.companhia = companhia
    }

    criarAviao() {
        console.log("🔧 O avião está sendo construído 🔧")
        console.log("")
        console.log(`Você acaba de adquirir um avião para a ${this.companhia}`)
        console.log("")
        console.log(`O seu avião é do ano ${this.ano}`)
        console.log("")
        console.log(`Cor ${this.cor}`)
        console.log("")
        console.log(`Modelo ${this.modelo}`)
        console.log("")

    }

    ligar() {
        console.log(" FUUUUUUUSHHHHHHHHHHHHHHHHHHHHHHHHHH")
    }


    // Polimorfismo
    acelerar() {
        console.log("🛩️ O AVIÃO ESTÁ DECOLANDO 🛩️") 
    }

    desligar() {
        console.log("🔑 Avião desligado 🔑")
    }
}



// CABEÇALHO

console.log("  /$$$$$$   /$$$$$$  /$$$$$$$  /$$$$$$$   /$$$$$$   /$$$$$$        /$$$$$$$$        /$$$$$$  /$$    /$$ /$$$$$$  /$$$$$$  /$$$$$$$$  /$$$$$$ ")
console.log(" /$$__  $$ /$$__  $$| $$__  $$| $$__  $$ /$$__  $$ /$$__  $$      | $$_____/       /$$__  $$| $$   | $$|_  $$_/ /$$__  $$| $$_____/ /$$__  $$")
console.log("| $$  \\__/| $$  \\ $$| $$  \\ $$| $$  \\ $$| $$  \\ $$| $$  \\__/      | $$            | $$  \\ $$| $$   | $$  | $$  | $$  \\ $$| $$      | $$  \\__/")
console.log("| $$      | $$$$$$$$| $$$$$$$/| $$$$$$$/| $$  | $$|  $$$$$$       | $$$$$         | $$$$$$$$|  $$ / $$/  | $$  | $$  | $$| $$$$$   |  $$$$$$ ")
console.log("| $$      | $$__  $$| $$__  $$| $$__  $$| $$  | $$ \\____  $$      | $$__/         | $$__  $$ \\  $$ $$/   | $$  | $$  | $$| $$__/    \\____  $$")
console.log("| $$    $$| $$  | $$| $$  \\ $$| $$  \\ $$| $$  | $$ /$$  \\ $$      | $$            | $$  | $$  \\  $$$/    | $$  | $$  | $$| $$       /$$  \\ $$")
console.log("|  $$$$$$/| $$  | $$| $$  | $$| $$  | $$|  $$$$$$/|  $$$$$$/      | $$$$$$$$      | $$  | $$   \\  $/    /$$$$$$|  $$$$$$/| $$$$$$$$|  $$$$$$/")
console.log(" \\______/ |__/  |__/|__/  |__/|__/  |__/ \\______/  \\______/       |________/      |__/  |__/    \\_/    |______/ \\______/ |________/ \\______/ ")
console.log("")
console.log("")
console.log("")
console.log("")



// Instanciando Objetos

// Carro
const carro1 = new Carro(2024, "Vermelho")
carro1.criarCarro()
console.log("")
carro1.ligar()
console.log("")
carro1.acelerar()
console.log("")
carro1.desligar()
console.log("")

console.log("******************** AGORA É HORA DE VOAR ********************")
console.log("******************** AGORA É HORA DE VOAR ********************")
console.log("******************** AGORA É HORA DE VOAR ********************")
console.log("")

// Avião

const aviao1 = new Aviao(2024, "Branco", "777", "LATAM")
aviao1.criarAviao()
console.log("")
aviao1.ligar()
console.log("")
aviao1.acelerar()
console.log("")
aviao1.desligar()
