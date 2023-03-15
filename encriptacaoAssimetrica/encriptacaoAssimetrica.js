import { generateKeyPairSync, publicEncrypt, privateDecrypt } from 'crypto';

// rsa é o algorítmo de criptografia
// O objeto de configuração é copiado da documentação do crypto
const {privateKey, publicKey} = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
})

// console.log(privateKey);
// console.log(publicKey);

const dadosCriptografados = publicEncrypt(publicKey, Buffer.from("Mensagem Super Secreta"));

console.log(dadosCriptografados.toString('hex'));

// Lado do back end

const dadosDecifrados = privateDecrypt(privateKey, dadosCriptografados);
console.log(dadosDecifrados.toString('utf-8'));