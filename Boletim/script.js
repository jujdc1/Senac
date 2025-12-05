const nome = prompt(`Digite o nome do Aluno`);
const nota1 = Number(prompt(`Digite a nota do primeiro Bimestre.`));
const nota2 = Number(prompt(`Digite a nota do segundo Bimestre.`));
const nota3 = Number(prompt(`Digite a nota do terceiro Bimestre.`));
const nota4 = Number(prompt(`Digite a nota do quarto Bimestre.`));
const mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;
let situacao = "";
if(mediaFinal >= 9){
    situacao = 'Aprovado com mérito!!';
}else if(mediaFinal >= 7 && mediaFinal <= 8.9){
    situacao = 'Aprovado!';
}else if(mediaFinal >= 5 && mediaFinal <= 6.9){
    situacao = 'Recuperação!';
}else if(mediaFinal < 5){
    situacao = 'Reprovado!!';
}else {
    situacao = 'Aluno não matriculado.';
}
document.body.innerHTML = `Aluno: ${nome}.<br>Notas: ${nota1, nota2, nota3, nota4}<br>Média Final: ${mediaFinal}<br>Situação: ${situacao}.`;