//--------------------------------
//Classes dentro de um Jogo
//--------------------------------

//--------------------------------
//Class
//--------------------------------
class personagem {
    constructor(nick, idade, classe){
        this.nick = nick
        this.idade = idade
        this.classe = classe
    }

    criar() {
        console.log(`-----------------------------------`)
        console.log(`Nickname: ${this.nick}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`Classe do Personagem: ${this.classe}`)
        console.log(`-----------------------------------`)
        console.log(`Personagem Criado!`)
        console.log(`-----------------------------------`)
    }

    atacar(){
        let arma = ""
        if (this.classe === "Guerreiro") {
            arma = "Espada"
        } else if (this.classe === "Mago") {
            arma = "Magia"
        } else if (this.classe === "Monge") {
            arma = "Artes Marciais"
        } else if (this.classe === "Ninja") {
            arma = "Shuriken"
        } 

        console.log(`O ${this.classe} atacou usando ${arma}`)
        console.log(`-----------------------------------`)

    }
}

//--------------------------------
//Novo Objeto
//--------------------------------
let novoPersonagem = new personagem ("putzgrilla66", 25, "Monge")


//--------------------------------
//Ação
//--------------------------------
novoPersonagem.criar()
novoPersonagem.atacar()