const nome = document.querySelector('#meta');
const descricao = document.querySelector('#descricao');
const prioridade = document.querySelector('#prioridade');
const data = document.querySelector('#data');
const erro = document.querySelector('.erro');
const lista = document.querySelector('#lista-metas');
const form = document.querySelector('.formulario');
const btnAdd = document.querySelector('#adicionar');

function adicionarMeta(e){
    e.preventDefault();
    let nomeMeta = nome.value;
    let descricaoMeta = descricao.value; 
    let prioridadeMeta = prioridade.value;
    let dataMeta = data.value;
    if(nomeMeta === "" || descricaoMeta === "" || prioridadeMeta === "" || dataMeta === "" ){
        erro.innerHTML = `<p class="erro">Preencha os campos corretamente.</p>`;
        return;
    }
    erro.innerHTML = "";
    const li = document.createElement('li');
    li.classList.add('itemLista');
    li.classList.add(prioridadeMeta);
    li.innerHTML = `<div class="textoLista">
                        <p>${nomeMeta}</p>
                        <p>${descricaoMeta}</p>
                        <p>${prioridadeMeta}</p>
                        <p>${dataMeta}</p>
                    </div>
                    <div>
                        <button class="concluir">concluir</button>
                        <button class="remover">X</button>
                    </div>`
    lista.appendChild(li);
    form.reset();
    const btnConcluir = document.querySelector('.concluir');
    const btnRemover = document.querySelector('.remover');
    btnConcluir.addEventListener('click', function(){
        li.classList.toggle('concluida');
    });
    btnRemover.addEventListener('click', function(){
        li.remove();
    });
};
btnAdd.addEventListener('click', adicionarMeta);