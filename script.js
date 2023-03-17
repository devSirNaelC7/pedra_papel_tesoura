const textJogador = document.querySelector("#textJogador");
const textComputador = document.querySelector("#textComputador");
const textResultado = document.querySelector("#textResultado");

const escolhaBtns = document.querySelectorAll(".btnEscolha")

let jogador;
let computador;
let resultado;

escolhaBtns.forEach(button => button.addEventListener("click", () => {
    jogador = button.textContent;
    turnoComputador();
    textJogador.textContent = `Jogador: ${jogador}`
    textComputador.textContent  = `Computador: ${computador}`
    textResultado.textContent = checkVencedor();


}));



function turnoComputador(){
    const numAlearorio = Math.floor(Math.random() * 3) + 1;
    switch(numAlearorio){
        case 1:
            computador = "Pedra";
            break;
        case 2:
            computador = "Papel";
            break;
        case 3:
            computador = "Tesoura";
            break;

    }
}

function checkVencedor(){
    if (jogador == computador){
        return "Empate!";
    }
    else if(computador == "Pedra"){
        return (jogador == "Papel") ? "Você venceu!" : "Você perdeu!";
    }
    else if(computador == "Papel"){
        return (jogador == "Tesoura") ? "Você venceu!" : "Você perdeu!";
    }
    else if(computador == "Tesoura"){
        return (jogador == "Pedra") ? "Você venceu!" : "Você perdeu!";
    }

}