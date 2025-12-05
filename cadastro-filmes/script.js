const filme = [];
const form = document.querySelector(`#formulario`);
const lista = document.querySelector(`#lista`);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const titulo = document.querySelector(`#titulo`).value;
    const genero = document.querySelector(`#genero`).value;
    const ano = document.querySelector(`#ano`).value;
    const classificacao = document.querySelector(`#classificacao`).value;
    const cadastro = { titulo, genero, ano, classificacao};
    filme.push(cadastro);
    mostrarCadastro();
    form.reset();
});
function criaTag(){
    const span = document.createElement('span');
    return span;
}
function mostrarCadastro() {
    lista.innerHTML = ``;
    for (let indice = 0; indice < filme.length; indice++) {
        const cadastro = filme[indice];
        const card = document.createElement('div');
        card.classList.add('card');
        const span = criaTag();
        if(cadastro.ano < 2000){ 
            card.classList.add('classico');
            span.classList.add('tag-classica');
            span.innerText = 'Classico';
        } 
        else { 
            card.classList.add('moderno');
            span.classList.add('tag-moderna');
            span.innerText = 'Moderno';
        }
        card.innerHTML += `
            <h3><b>${cadastro.titulo}</b></h3>
            <p>${cadastro.genero}</p>
            <p>Ano de Lançamento: <span>${cadastro.ano}</span></p>
            <p>Classificação Indicativa:  <span>${cadastro.classificacao}</span></p>
        `;
        lista.appendChild(card);
        card.appendChild(span);
    }
};