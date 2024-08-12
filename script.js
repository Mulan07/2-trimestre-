const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Antes mesmo de sair da escola você se depara com obstaculos, sua vida passa como um filme na sua cabeca, surgem dúvidas e você esta atrás das respostas que vão influenciar seu sucesso no futuro, que sentimento isso te traz?",
       alternativas: [
        "Espanto",
        "Animado"
    ]
    },
    {
        enunciado: "Com a tentativa de achar as respostas para garantir seu futuro, vocẽ se depara com pessoas que tentam te atrapalhar e passar por cima de vocẽ, que atitude vocẽ toma ?",
       alternativas: [
        "Utiliza sua inteligencia para ser melhor de forma justa e honesta, e conquistar aquilo que deseja.",
        "Age de forma indecente tentando fazer com que a pessoa tropece e caia de forma errada para não passar na sua frente."
    ]
    },
    {
        enunciado: "Ao encontrar um caminho que melhor se adapta a você:",
       alternativas: [
        "Defende a ideia que você é capaz de conquistar aquilo que deseja sem trapaças.",
        "Me preocupo com as indiferenças das outras pessoas."
    ]
    },
    {
        enunciado: "Ao finalizar o começo do seu 18 anos, você precisa pensar em um projeto de como planejar sua vida. E agora?",
       alternativas: [
        "Criar um plano utilizando o celular com aplicativos que te mostraram o que é essencial e superfulo.",
        "Pegar um caderno e escrever tudo aquilo com o que vc gasta."
    ]
    },
    {
        enunciado: "Em 2035, você ... Achou assustador pensar em tudo que iria começar a fazer sozinho a partir dos seus 18 anos. Percebeu que se tornar adulto vai muito além do que só ter responsabilidades.Percebeu que muitas pessoas ainda não sabem o querem para o seu futuro e assim decidiu ajudar essas pessoas da forma que conseguia, infelizmente só nós podemos determinar o caminho que vamos seguir, mesmo que tenhamos a ajuda de outras pessoas a vida adulta após os 18 anos é a parte mais dificil das nossas vidas...",
        
    }
]
