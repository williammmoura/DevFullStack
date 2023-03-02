import { listaNegociacoes } from '../models/listaNegociacoes.js';

export class negociacoesViews {
  viewList(lista) {
    let tb = document.getElementById('tbody');
    tb.innerText = '';

    for (let index = 0; index < lista.length; index++) {
      let tr = tb.insertRow();

      let lN = new listaNegociacoes();

      let td_data = tr.insertCell();
      let td_quantidade = tr.insertCell();
      let td_valor = tr.insertCell();
      let td_acao = tr.insertCell();

      td_data.innerText = lista[index].data;
      td_quantidade.innerText = lista[index].quantidade;
      td_valor.innerText = lista[index].valor;

      // Colocar icones na celula par as ações
      let imgEditar = document.createElement('img');
      imgEditar.src = '../imagens/editar.png';
      imgEditar.setAttribute('onclick', 'alert("Editar.")');

      let imgDelete = document.createElement('img');
      imgDelete.src = '../imagens/excluir.png';
      imgDelete.setAttribute('onclick', 'confirm("Confirmar?")');

      let imgFiltrar = document.createElement('img');
      imgFiltrar.src = '../imagens/filtrar.png';
      imgFiltrar.setAttribute('onclick', 'alert("filtrar")');

      td_acao.appendChild(imgDelete);
      td_acao.appendChild(imgEditar);
      td_acao.appendChild(imgFiltrar);
      // -------------------------------------------
    }
  }
}
