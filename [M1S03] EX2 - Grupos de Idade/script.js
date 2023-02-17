function idadeGrupo() {
  let num = document.getElementById('idade').value;
  console.log(num);
  if (num < 0 || (num => 110)) {
    document.getElementById('retorno').innerHTML = 'Idade inválida';
  } else if (num <= 12) {
    document.getElementById('retorno').innerHTML = 'Idade de uma criança.';
  } else if (num <= 17) {
    document.getElementById('retorno').innerHTML = 'Idade de um adolescente.';
  } else if (num <= 65) {
    document.getElementById('retorno').innerHTML = 'Idade de um adulto.';
  } else {
    document.getElementById('retorno').innerHTML = 'Idade de um senior.';
  }
}
