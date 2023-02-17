function permissao() {
  let comprimento = document.getElementById('comprimento').value;
  let peso = document.getElementById('peso').value;
  console.log(peso);
  console.log(comprimento);
  if (peso <= 1500 && comprimento <= 5) {
    document.getElementById('retorno').className = 'verde';
    document.getElementById('retorno').innerHTML = 'Passagem permitida.';
  } else {
    document.getElementById('retorno').className = 'vermelho';
    document.getElementById('retorno').innerHTML =
      'Proibida a passagem do veículo.';
  }
}
