document.getElementById('btn').addEventListener('click', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;

  if (nome == '') {
    alert('Preencha corretamente nome!!!');
  } else {
    alert(nome + ', obrigado pelo cadastro!');
  }
  localStorage.setItem('name', nome);
  console.log('Nome: ' + nome);
});

submit();
