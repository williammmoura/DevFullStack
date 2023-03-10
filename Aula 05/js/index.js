// dataAtual = new Date();

// var Ano = dataAtual.getFullYear();

// alert('Erico tem ' + (parseInt(Ano) - 1968) + ' Anos.');

var notas = [];

var media = 0;

var nNotas = parseInt(window.prompt('Quantas notas você recebeu?'));

for (var i = 0; i < nNotas; i++) {
  notas[i] = parseInt(window.prompt('Inserir nota ' + (i + 1) + ':'));
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;

media = notas.reduce(reducer) / notas.length;

alert('Media final ' + media);
