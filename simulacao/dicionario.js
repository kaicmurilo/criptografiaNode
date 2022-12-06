
import { createHash } from 'crypto'

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = this.criaHash(senha)
    }
    criaHash(senha) {
        return createHash('sha256').update(senha).digest('hex')
    }
    autentica(nome, senha) {
        if (nome === this.nome) {
            if (this.hash === this.criaHash(senha)) {
                console.log("Usuario autenticado com sucesso!")
                return true
            } else {
                //console.log('Usuario com senha incorreta.')
                return false
            }
        }
        //console.log("Usuario incorreto.")
        return false
    }
}

const usuario = new Usuario('kaic nunes', 'senha123')


const senhaComuns = ["senha", "123456", "senha123", "admin", "blink182", "meuAniversario", "senha123456", "brasil", "102030"]


senhaComuns.map(senha => {
    if (usuario.autentica("kaic nunes", senha))
        console.log(`A senha do usuario e ${senha}`)
})