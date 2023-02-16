function parOuImpar() {
  let num = document.getElementById('numero').value;
  if (num % 2 == 0) {
    document.getElementById('retorno').innerHTML = num.toString() + ' é par.';
  } else {
    document.getElementById('retorno').innerHTML = num.toString() + ' é impar.';
  }
}
