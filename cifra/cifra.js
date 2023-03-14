const senhaSecreta = "alura";

function cifraMensagem(mensagem, movimentos){
    const mensagemCifrada = mensagem.split('').map(caractere => {
        const codCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codCaractere + movimentos);
    });

    return mensagemCifrada.join('');
}

console.log(cifraMensagem(senhaSecreta, 4));