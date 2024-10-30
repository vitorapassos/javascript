/**
 *  Estudo das funções com parâmetros e retorno
 * @author Vitor de Assis
 */

// Função com retorno
// Função deste tipo pode ser chamada antes e depois da criação da mesma
function somar(a, b){
    return (console.log(a + b))
}

somar(5.5,2)

// Função deste tipo deve ser criada antes da chamada
const somarA = function(a, b){
    return (console.log(a+b))
}

somarA(2, 6)

// Arrow function
const somarAF = (a, b) => {
    return (console.log(a+b))
}

somarA(2, 7)

// Na função abaixo o retorno é implícito
const somarAFS = (a, b) => console.log(a + b)

somarAFS(3,9)