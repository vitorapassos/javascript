/**
 * 
 * 
 * @author Vitor de Assis
 */

// Limpar tela
console.clear()

class User {
    // Atributos
    constructor(login, senha){
        this.login = login
        //Encapsulamento (O _(underline) enjaula a variável)
        let _senha = senha
        this.getSenha = () => _senha //leitura
        this.setSenha = (novaSenha) => _senha = novaSenha // escrita
    }

    // Método
    logar(){
        console.log("___________________________")
        console.log(`Usuário: ${this.login}`)
        console.log(`Senha: ${this.getSenha()}`)
        if (this.login === 'admin' && this.getSenha ==='123@senac'){
            console.log("Usuário autenticado")
        }else{
            console.log("Usuário e/ou senha inválida(s)")
        }
    }
}

/**   Sistema (criando usuário) */
const user1 = new User ("admin", "1234")
user1.logar()
user1.setSenha("123@senac")
user1.logar()