function senha() {
  let senha = document.getElementById('senha').value;

  if (senha <= '1234') {
    document.getElementById('retorno').className = 'bg verde';
    document.getElementById('retorno').innerHTML = 'ACESSO PERMITIDO';
  } else {
    document.getElementById('retorno').className = 'bg vermelho';
    document.getElementById('retorno').innerHTML = 'ACESSO NEGADO';
  }
}
