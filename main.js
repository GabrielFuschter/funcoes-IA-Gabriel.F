const caixaPrincipal = document.querySelectorAll(".caixa-principal");
const caixaPerguntas = document.querySelectorAll(".caixa-perguntas");
const caixaAlternativas = document.querySelectorAll(".caixa-alternativas");
const caixaResultado = document.querySelectorAll(".caixa-resultado");
const textoResultado = document.querySelectorAll(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta",
                afirmacao: " Afirmação ",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
    {
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
    {
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
    {
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
    {
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: "Afirmação",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textcontent = perguntaAtual.enunciado;
    mostraAlternativa();
}

function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativa){
        constbotaoAlternativa = document.createElement("button");
        botaoAlternativas.textcontent = alternativa.texto;
        caixaAlternativas.appendchild (botaoAlternativas);
    }

}

mostraPergunta();
