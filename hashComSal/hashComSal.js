import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

function criaHashComSal(senha){
    //randomBytes(número qualquer) + transforma em string hex para complicar mais
    const sal = randomBytes(16).toString('hex');
    
    // senha, sal e tamanho do hash
    const senhaHash = scryptSync(senha, sal, 64).toString('hex');

    return `${sal}:${senhaHash}`;
}

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':')
    }

    autentica(nome, senha){
        if (nome === this.nome){
            const testeHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash, 'hex');

            const hashCorrespondem = timingSafeEqual(testeHash, hashReal);

            if (hashCorrespondem){
                console.log("Usuário autenticado com sucesso!");
                return true;
            }
        }

        console.log("Usuário ou senha inválidos...");
        return false;
    }
}

const usuario = new Usuario('Ivan', 'senhaSecreta');
//console.log(usuario);
usuario.autentica('Ivan', 'senhaSecreta');