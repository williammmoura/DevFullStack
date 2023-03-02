export class listaNegociacoes {
  #listaNegociacoes;

  constructor() {
    this.#listaNegociacoes = [];
  }

  adicionar(negociacao) {
    this.#listaNegociacoes.push(negociacao);
  }

  delete(index) {
    this.#listaNegociacoes.splice(index, 1);
  }

  get lista() {
    return [].concat(this.#listaNegociacoes);
  }
}
