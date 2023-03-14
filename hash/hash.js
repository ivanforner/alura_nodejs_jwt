import { createHash } from "crypto";

function criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex');
}

//console.log(criaHash("uma String Qualquer"));

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha){
        if (nome === this.nome && this.hash === criaHash(senha)){
            console.log("Usuário autenticado!")
            return true;
        }

        console.log("Usuário ou senha incorretos...");
        return false;
    }
}

const usuario = new Usuario("Ivan", "minhaSenha");

usuario.autentica("Ivan", "minhaSenha");
usuario.autentica("Ivan", "outraSenha");
