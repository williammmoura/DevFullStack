//
//

var convidados = JSON.parse(localStorage.getItem('convidados')) || [];
var elLista = document.getElementById('listaConvidados');
var elCampo = document.getElementById('campo');
var elBotao = document.getElementById('botao');

elBotao.onclick = function () {
  var nome = elCampo.value;
  convidados.push({ nome: nome });
  elCampo.value = '';
  salvarConvidados();
};

function salvarConvidados() {
  localStorage.setItem('convidados', JSON.stringify(convidados));
}

// function listarConvidados() {
//   for (const convidado of convidados) {
//     var elConvidado = document.createElement('li');
//     var elNome = document.creatTextNode(convidado.nome);
//   }
