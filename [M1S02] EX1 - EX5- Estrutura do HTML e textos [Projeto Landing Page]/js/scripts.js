function submit() {
  document
    .getElementById('submitButton')
    .addEventListener('click', function (event) {
      event.preventDefault();

      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;

      if (nome == '' || email == '') {
        alert('Preencha corretamente nome e e-mail!!!');
      } else {
        alert(nome + ', obrigado pelo cadastro!');
      }
      localStorage.setItem('name', nome);
      console.log('Nome: ' + nome);
      localStorage.setItem('email', email);
      console.log('Email: ' + email);
    });
}

submit();
