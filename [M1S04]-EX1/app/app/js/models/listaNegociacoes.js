export class listaNegociacoes {
  #listaNegociacoes;

  constructor() {
    this.#listaNegociacoes = [];
  }

  adicionar(negociacao) {
    this.#listaNegociacoes.push(negociacao);
  }

  filtrar(val) {
    return [].concat(this.#listaNegociacoes).filter(neg => {
      if (neg.valor > val) {
        return neg;
      }
    });
  }

  get lista() {
    return [].concat(this.#listaNegociacoes);
  }
}
