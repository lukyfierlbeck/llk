const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "voce costuma usar IA no seu dia a dia?",
        alternativas: [
            {
                texto: "nao",
                afirmacao: "afirmação"
            },
            {
                texto: "sim",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "em quais lugares/objetivos voce utiliza a IA?",
        alternativas: [
            {
                texto: "tarefas de casa,trabalhos pedidos pelos preofessores, contas, organizaçao",
                afirmacao: "afirmação"
            },
            {
                texto: "nao utilizo IA para fazer as coisas",
                afirmacao: "afirmação"
            }
        ]
    },

    {
        enunciado: "na sua opniao a IA pode evoluir mais e mais a cada dia ate substituir os humansos?",
        alternativas: [
            {
                texto: "sim, afinal varias pessoas estao perdendo seu lugar pela IA.",
                afirmacao: "afirmação"
            },
            {
                texto: "nao, afinal varias pessoas ainda preferem ser atendido por um humano.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        //
        enunciado: "na sua opniao a ia ajuda muito na facilidade de afazeres?;",
        alternativas: [
            {
                texto: "sim, afinal a organizacao fica mais facil.",
                afirmacao: "afirmação"
            },
            {
                texto: "nao, afinal as pessoas nao pensariam no que fazer",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "a ia pode prejudicar a educaçao?",
        alternativas: [
            {
                texto: "sim, pela falta de raciocinos e depedencia para tudo, fazendo a pessoa nao pensar e ter tudo na mao",
                afirmacao: "afirmação"
            },
            {
                texto: "nao,ajuda nas prsquisas e criatividade das pessoas",
                afirmacao: "afirmação"
            }
        ]
    }

]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
