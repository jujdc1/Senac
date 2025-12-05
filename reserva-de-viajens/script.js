const viagens = [];
const form = document.querySelector(`#formulario`);
const lista = document.querySelector(`#lista`);

form.addEventListener('submit', function(e){
    e.preventDefault();
    const nome = document.querySelector(`#nome`).value;
    const data = document.querySelector(`#data`).value;
    const destino = document.querySelector(`#destino`).value;
    const reserva = {nome, data, destino};
    viagens.push(reserva);
    mostraReservas();
    form.reset();
});
function mostraReservas(){
      lista.innerHTML = ``;
    for(let indice = 0; indice < viagens.length; indice++){
        const reserva = viagens[indice];
        const hoje = new Date().toISOString().split('T')[0];
        const cor = reserva.data < hoje ? `red` : `cyan`;
        const status = reserva.data < hoje ? 'Data Inválida' : 'Viagem Confirmada!';
        const formataData = reserva.data.split('-').reverse().join('/');
        lista.innerHTML += `
        <div id="card" style="border-right: 1px solid ${cor}"> 
            <h3><b>${reserva.nome}</b></h3>
            <p>${formataData}</p>
            <p>Destino: <span style="color:${cor}">${reserva.destino}</span></p>
            <p>${status}</p>
        </div>
        `;
    }
}