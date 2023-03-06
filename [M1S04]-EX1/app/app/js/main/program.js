import { NegociacaoController } from '../controllers/negociacaoController.js';

let controller = new NegociacaoController();
let formulario = document.querySelector('form');
let filtrarBtn = document.getElementById('filtrar-btn');

function limpar() {
  document.getElementById('data').value = '';
  document.getElementById('quantidade').value = '';
  document.getElementById('valor').value = '';
}

formulario.addEventListener('submit', e => {
  e.preventDefault();
  controller.criarNegociacao();
  limpar();
});

formulario.addEventListener('reset', e => {
  e.preventDefault();
  limpar();
});

filtrarBtn.addEventListener('click', e => {
  e.preventDefault();
  controller.filtrarNegociacao(document.getElementById('vminimo').value);
  limpar();
});
