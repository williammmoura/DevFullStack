function suaDecisao() {
  let text = 'Precione uma opção\nOK ou Cancel.';
  // confirm() funciona como o alert() só que ele retorna true ou false.
  if (confirm(text) == true) {
    text = 'Ok, você confirmou';
  } else {
    text = 'Uhm, você cancelou';
  }
  document.getElementById('decisao').innerHTML = text;
}
