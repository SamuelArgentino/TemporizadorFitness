const contador = document.getElementById("timer");


export function mostrarTempo(tempoSegundos) {
    const tempo = new Date(tempoSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString("pt-BR", {minute: "2-digit", second: "2-digit"})
    contador.innerHTML = `${tempoFormatado}`
}