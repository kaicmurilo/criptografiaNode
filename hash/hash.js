//colocar "type": "module" em package.json para entender a importacao de modulos
import { createHash } from 'crypto'

function criaHash(senha) {
    //funcao do cprypto onde passa o modo de criptografia, o que sera criptografado e o modo como sera mostrado, no caso hexadecimal
    return createHash('sha256').update(senha).digest('hex')
}

console.log(criaHash('kaic'))


class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = criaHash(senha)
    }

    autentica(nome, senha) {
        if (nome === this.nome) {
            if (this.hash === criaHash(senha)) {
                console.log("Usuario autenticado com sucesso!")
                return true
            } else {
                console.log('Usuario com senha incorreta.')
                return false
            }
        }
        console.log("Usuario incorreto.")
        return false
    }
}

const usuario = new Usuario('kaic nunes', 'minhaSenha')

console.log(usuario)

//caso de sucesso
usuario.autentica('kaic nunes', 'minhaSenha')

//caso de falha
usuario.autentica('kaic nunex', 'minhaSenha')
usuario.autentica('kaic nunes', 'minhasenha')