import { negociacao } from '../models/negociacao';

export class NegociacaoController {
  #campoData;
  #campoQuantidade;
  #campoValor;

  constructor() {
    this.#campoData = document.querySelector('#dataNg');
    this.#campoQuantidade = document.querySelector('#numeroAcoes');
    this.#campoValor = document.querySelector('#valorNg');
  }
}
