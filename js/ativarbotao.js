const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");

export function ativarBotao (botao) {
    if (botao === "curtoBt") {
        curtoBt.classList.add("active");
        focoBt.classList.remove("active");
        longoBt.classList.remove("active");
    } else if (botao === "focoBt") {
        focoBt.classList.add("active");
        curtoBt.classList.remove("active");
        longoBt.classList.remove("active");
} else {
        longoBt.classList.add("active");
        focoBt.classList.remove("active");
        curtoBt.classList.remove("active");
}
}