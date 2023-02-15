function iniciar() {
  let sobrenome = prompt('Qual é seu sobrenome?');
  let nome = prompt('Qual é seu nome?');
  let nomeCompleto = nome + ' ' + sobrenome;
  console.log('Nome: ' + nomeCompleto);

  if (nome != '') {
    document.getElementById('retorno').innerHTML =
      'Dados coletados pelos prompts.';
    document.getElementById('nome').innerHTML = 'Nome: ' + nomeCompleto;
    alert('Nome: ' + nomeCompleto);
  } else {
    document.getElementById('retorno').innerHTML =
      'Alguns ou todos os prompets não foi ou foram preenchidos... ';
  }
}
