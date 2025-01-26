function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio(){
    return numeroSorteado = parseInt(Math.random() * 100 + 1);
 }

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', 'Tu é o bichão memo em! Só precisou de ' + tentativas + ' tentativas');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        exibirTextoNaTela('h1', 'Como dizia Raul Seixas: Tente outra vez!');
        if (chute > numeroSecreto){
            exibirTextoNaTela('p',`O numero secreto é menor que ${chute}`);
        }else{
            exibirTextoNaTela('p',`O numero secreto é maior que ${chute}`);
        }
        limpaCampo();
        tentativas++;
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio;
    limpaCampo();
    tentativas = 1;
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 100');
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let listaDeNumerosSorteados = [];

exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 100');

