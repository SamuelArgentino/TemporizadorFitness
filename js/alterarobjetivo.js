const html = document.querySelector("html");
const imagem = document.querySelector(".app__image");
const mensagem = document.querySelector(".app__title");

export function alterarObjetivo (objetivo) {
    html.setAttribute("data-contexto", objetivo)
    imagem.src = `/imagens/${objetivo}.png`;
    switch (objetivo) {
        case "descanso-curto":
            mensagem.innerHTML = `
                            Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;

        case "foco":
            mensagem.innerHTML = `
                            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;

        case "descanso-longo":
            mensagem.innerHTML = `
                                        Hora de voltar à superície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
    
        default:
            break;
    }
}