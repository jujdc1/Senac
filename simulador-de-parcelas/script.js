const form = document.querySelector(`#formulario`);
const resultado = document.querySelector(`#resultado`);

form.addEventListener('submit', function(e){
    e.preventDefault();
    const valor = Number(document.querySelector(`#valor`).value);
    const parcelas = Number(document.querySelector(`#parcelas`).value);

    if(parcelas < 1 || parcelas > 12){
        resultado.innerHTML = 'Quantidade de parcelas deve ser entre 1 e 12';
        return;
    }
    const hoje = new Date();
    const total = valor / parcelas;
    resultado.innerHTML = ``;
    for(let i = 1; i <= parcelas; i++){
        const vencimento = new Date(hoje);
        vencimento.setMonth(vencimento.getMonth()+(i-1));
        const semana = vencimento.getDay();
        let status = '';
        if(semana === 0 || semana === 6){
            status += `(Vencimento adiado)`;
        }
        const dia = String(vencimento.getDate()).padStart(2, '0');
        const mes = String(vencimento.getMonth()+1).padStart(2, '0');
        const ano = vencimento.getFullYear();
        resultado.innerHTML += `
            ${i}ª Parcela - R$${total.toFixed(2)} - Vencimento ${dia}/${mes}/${ano}<br>${status}<br>
        `;
    }
});




