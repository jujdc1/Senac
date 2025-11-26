const frases = [
    "Acredite em si mesmo e tudo será possível", "Você é mais forte do que imagina.",
    "Não é sobre ser o melhor, é sobre ser melhor do que ontem.",
    "Sonhar grande dá o mesmo trabalho que sonhar pequeno.",
    "Você é o seu próprio padrão de beleza.",
    "Não se compare, florescemos em tempos diferentes."
];
const botao = document.querySelector('button');
const frase = document.querySelector('#frase');

function gerarFrase(){
    const indiceAleatorio = Match.floor(Match.random() * frase.length);
    frase.innerText = frase[indiceAleatorio];
};

botao.addEventListener('click', gerarFrase);