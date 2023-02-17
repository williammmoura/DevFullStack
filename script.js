function classif() {
  let vpedido = document.getElementById('vpedido').value;
  console.log(vpedido);
  if (vpedido <= 10000) {
    document.getElementById('retorno').className = 'bg bronze';
    document.getElementById('retorno').innerHTML = 'Classificação BRONZE';
  } else if (vpedido <= 100000) {
    document.getElementById('retorno').className = 'bg prata';
    document.getElementById('retorno').innerHTML = 'Classificação PRATA';
  } else if (vpedido <= 500000) {
    document.getElementById('retorno').className = 'bg ouro';
    document.getElementById('retorno').innerHTML = 'Classificação OURO';
  } else {
    document.getElementById('retorno').className = 'bg platina';
    document.getElementById('retorno').innerHTML = 'Classificação PLATINA';
  }
}
