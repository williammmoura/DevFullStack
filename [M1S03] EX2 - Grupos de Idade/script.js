function idadeGrupo() {
  let idade = document.getElementById('idade').value;
  console.log(idade);
  if (idade < 0 || idade >= 110) {
    document.getElementById('retorno').innerHTML = 'Idade inválida';
  } else if (idade <= 12) {
    document.getElementById('retorno').innerHTML = 'Idade de uma criança.';
  } else if (idade <= 17) {
    document.getElementById('retorno').innerHTML = 'Idade de um adolescente.';
  } else if (idade <= 65) {
    document.getElementById('retorno').innerHTML = 'Idade de um adulto.';
  } else {
    document.getElementById('retorno').innerHTML = 'Idade de um senior.';
  }
}
