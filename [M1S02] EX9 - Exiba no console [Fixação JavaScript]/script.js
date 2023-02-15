function iniciar() {
  let nome = prompt('Qual é seu nome?');
  let idade = prompt('Qual sua idade?');
  let cidade = prompt('Informe sua cidade.');

  console.log('Nome: ' + nome);
  console.log('Idade: ' + idade);
  console.log('Cidade: ' + cidade);

  // if (nome != '') {
  document.getElementById('retorno').innerHTML =
    'Dados coletados pelos prompts.';
  document.getElementById('nome').innerHTML = 'Nome: ' + nome;
  document.getElementById('idade').innerHTML = 'Idade: ' + idade;
  document.getElementById('cidade').innerHTML = 'Cidade: ' + cidade;
  // } else {
  document.getElementById('retorno').innerHTML =
    'Alguns ou todos os prompets não foi ouo foram preenchidos... ';
  // }
}
