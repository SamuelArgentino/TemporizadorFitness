import { alterarObjetivo } from "./js/alterarobjetivo.js";
import { ativarBotao } from "./js/ativarbotao.js";
import { mostrarTempo } from "./js/mostrartempo.js";


const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const comecarPausaBt = document.getElementById("start-pause")
const comecarPausaBtImg = document.querySelector(".app__card-primary-butto-icon");
const comecarPausaBtTexto = document.querySelector(".comecar-pausar");
const musica = document.getElementById("alternar-musica");
const musicaArquivo = new Audio("/sons/luna-rise-part-one.mp3");
const playAudio = new Audio("/sons/play.wav");
const stopAudio = new Audio("/sons/pause.mp3");
const finalizadoAudio = new Audio("/sons/beep.mp3")
const focoDefault = 1500;
const descansoCurtoDefault = 300;
const descansoLongoDefault = 900;

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;
musicaArquivo.loop = true;

focoBt.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 1500;
    mostrarTempo(tempoDecorridoEmSegundos);
    alterarObjetivo("foco");
    ativarBotao("focoBt");
})

curtoBt.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 300;
    mostrarTempo(tempoDecorridoEmSegundos);
    alterarObjetivo("descanso-curto");
    ativarBotao("curtoBt");
})

longoBt.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 900;
    mostrarTempo(tempoDecorridoEmSegundos);
    alterarObjetivo("descanso-longo");
    ativarBotao("longoBt");
})

musica.addEventListener("change", () => {
    if(musicaArquivo.paused) {
        musicaArquivo.play();
    } else {
        musicaArquivo.pause();
    }
})

comecarPausaBt.addEventListener("click", () => {
    if (comecarPausaBtTexto.textContent === "Começar") {
    comecarPausaBtImg.src = "/imagens/pause.png";
    comecarPausaBtTexto.textContent = "Pausar"
    iniciarPausarContagem();
    playAudio.play();
    } else {
        comecarPausaBtImg.src = "/imagens/play_arrow.png";
        comecarPausaBtTexto.textContent = "Começar"
        iniciarPausarContagem();
        stopAudio.play();
    }
})

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0) {
        finalizadoAudio.play();
        alert("Tempo finalizado!");
        comecarPausaBtImg.src = "/imagens/play_arrow.png";
        comecarPausaBtTexto.textContent = "Começar"
        zerar();
        checarTempo();
        return
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo(tempoDecorridoEmSegundos);
    console.log(tempoDecorridoEmSegundos)
}

function iniciarPausarContagem() {
    if (intervaloId) {
        zerar();
        return
    }
    intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar() {
    clearInterval(intervaloId);
    intervaloId = null;
}

function checarTempo() {
    if (curtoBt.classList.contains("active")) {
        tempoDecorridoEmSegundos = descansoCurtoDefault;
        mostrarTempo(tempoDecorridoEmSegundos);
    } else if (focoBt.classList.contains("active")) {
        tempoDecorridoEmSegundos = focoDefault;
        mostrarTempo(tempoDecorridoEmSegundos);
    } else {
        tempoDecorridoEmSegundos = descansoLongoDefault;
        mostrarTempo(tempoDecorridoEmSegundos);
    }
}

mostrarTempo(tempoDecorridoEmSegundos);