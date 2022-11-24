import { scryptSync, randomBytes, timingSafeEqual } from 'crypto'
import { runInThisContext } from 'vm';

function criaHashComSal(senha) {
    //randomBytes gerador aleatorio de numeros
    //transforma ele em string com toString no formato hexadecimal 
    const sal = randomBytes(16).toString('hex');
    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex')

    return `${sal}:${senhaHasheada}`

}

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':')
    }

    autentica(nome, senha) {
        if (nome === this.nome) {
            const testeHash = scryptSync(senha, this.sal, 64)
            const hashReal = Buffer.from(this.hash, 'hex');

            //funcao para comparar os hash
            const HashCorrespondem = timingSafeEqual(testeHash, hashReal)

            if (HashCorrespondem) {
                console.log("Usuário autenticado com sucesso. ")
                return true
            } else {
                console.log("Senha incorreta.")
                return false
            }
        }
        console.log('Usuario incorreto.')
        return false
    }
}

const jm = new Usuario('kaic', '123456')

console.log(jm)

//teste de sucesso

jm.autentica('kaic', '123456')

//teste de erro
jm.autentica('kaicolas', '123456')
jm.autentica('kaic', '123')