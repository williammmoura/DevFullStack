function check() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;

  if (num1 == num2) {
    document.getElementById('retorno').className = 'bg vermelho';
    document.getElementById('retorno').innerHTML =
      'NÚMEROS NÃO PODEM SER IGUAIS';
  } else if (num1 > num2) {
    document.getElementById('retorno').className = 'bg verde';
    document.getElementById(
      'retorno'
    ).innerHTML = `O primeiro número (${num1}) é maior que o segundo número (${num2})`;
  } else {
    document.getElementById('retorno').className = 'bg verde';
    document.getElementById(
      'retorno'
    ).innerHTML = `O primeiro número (${num1}) é menor que o segundo número (${num2})`;
  }
}
