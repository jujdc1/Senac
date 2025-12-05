const biblioteca = [];
const form = document.querySelector(`#formulario`);
const lista = document.querySelector(`#lista`);

form.addEventListener('submit', function(e){
    e.preventDefault();
    const titulo = document.querySelector(`#titulo`).value;
    const autor = document.querySelector(`#autor`).value;
    const ano = document.querySelector(`#ano`).value;
    const livro = {titulo, autor, ano};
    biblioteca.push(livro);
    mostrarLivros();
    form.reset();
});
function mostrarLivros(){
    lista.innerHTML = ``;
    for(let indice = 0; indice < biblioteca.length; indice++){
        const livro = biblioteca[indice];
        const cor = livro.ano < 2000 ? `red` : `cyan`;
        lista.innerHTML += `<div id="card" style="border: 1px solid ${cor}"> 
        <h3><b>${livro.titulo}</b></h3>
        <p>${livro.autor}</p>
        <p>Ano de Lançamento: <span style="color:${cor}">${livro.ano}</span></p>
        </div>
        `;
    }
};