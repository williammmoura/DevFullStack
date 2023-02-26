export class negociacao {
  #dataNg;
  #numeroAcoes;
  #valorNg;

  constructor(data, numero, valor) {
    this.#dataNg = data;
    this.#numeroAcoes = numero;
    this.#valorNg = valor;
  }
}
