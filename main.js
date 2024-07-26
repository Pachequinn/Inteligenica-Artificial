
    const caixaPrincipal = document.querySelector(".caixa-principal");
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto-resultado");




    const perguntas = [

        enunciado: "Você gosta de bolo?", 
        alternativas: [
            {
                texto: "Alternativa A",
                afirmacao: "Você é uma pessoa normal"

            },

            {
                texto: "Alternativa B"
                afirmacao: "Você é chato pra carambolas"
            }]

    }, 
    enunciado: "Você dorme?", 
    alternativas: [
        {
            texto: "Sim",
            afirmacao: "Você é uma pessoa normal"

        },
       
        {
            texto: "Não"
            afirmacao: "Você é uma anomalia do universo"
        }]

    },
    function mostraPergunta(){
        if(atual >= perguntas.length){
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent ="";
        mostraAlternativas();         
        }
]
