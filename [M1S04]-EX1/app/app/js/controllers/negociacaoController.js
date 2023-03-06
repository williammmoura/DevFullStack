import { listaNegociacoes } from '../models/listaNegociacoes.js';
import { aNegociacao } from '../models/negociacao.js';
import { negociacoesViews } from '../views/negociacoesViews.js';

export class NegociacaoController {
  #campoData;
  #campoQuantidade;
  #campoValor;
  listaNegociacoes;

  constructor() {
    this.#campoData = document.getElementById('data');
    this.#campoQuantidade = document.getElementById('quantidade');
    this.#campoValor = document.getElementById('valor');
    this.listaNegociacoes = new listaNegociacoes();
  }

  criarNegociacao() {
    let dt = new Date(this.#campoData.value);
    let data =
      dt.getDate() + '/' + (dt.getMonth() + 1) + '/' + dt.getFullYear();
    let quantidade = this.#campoQuantidade.value;
    let valor = this.#campoValor.value;
    let negociacao = new aNegociacao(data, quantidade, valor);
    let negView = new negociacoesViews();

    this.listaNegociacoes.adicionar(negociacao);
    negView.viewList(this.listaNegociacoes.lista);
  }

  filtrarNegociacao(valor) {
    let negView = new negociacoesViews();
    let listaFiltrada = this.listaNegociacoes.filtrar(valor);
    negView.viewList(listaFiltrada);
  }
}
