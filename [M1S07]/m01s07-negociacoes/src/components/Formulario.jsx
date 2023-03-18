import PropTypes from 'prop-types';
import { GroupInput } from './Groupinput';
import { useState } from 'react';
import moment from 'moment';

export const Formulario = props => {
  // Criando e controlando (set) o estado das variáveis
  // data, quantidade e valor.
  const [data, setData] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [valor, setValor] = useState('');

  function validarCampos() {
    let msn = '';
    if (data && quantidade && valor) {
      return true;
    } else {
      if (!data) {
        msn = '- Data\n';
      }
      if (!quantidade) {
        msn = msn + '- Quantidade\n';
      }
      if (!valor) {
        msn = msn + '- Valor';
      }
      // Neste alert ele irá adicionar as msn concatenadas
      // a mensagem a baixo.
      alert('É necessário preencher o(s) campo(s):\n' + msn);
      return false;
    }
  }

  // A função a seguir irá ser submetida pelo botão
  // ela montará uma constante contendo um objeto
  // chave valor {data: data, quantidade: quantidade, valor: valor}
  // Através da props. quem vem do App onde o módulo
  // Formulário é chamado, é enviado uma função que adiciona
  // a 'negociacao' no array 'negociacoes'.

  function handleAdicionarNegociacao(event) {
    event.preventDefault();
    if (validarCampos()) {
      const negociacao = {
        data: moment(data).format('DD-MMM-YY'),
        quantidade: quantidade,
        valor: valor,
      };
      // Executando a função recebida pela props
      // para adicionar a 'negociacao' e enviada pelo App
      props.quandoAdicionar(negociacao);

      // Depois de enviar os 3 valores dos inputs para
      // dentro do objeto negociação é necessário zerá-los
      setData('');
      setQuantidade('');
      setValor('');
    }
  }

  return (
    <form className="form container">
      <div className="row">
        <GroupInput
          etiqueta="Data"
          tipo="date"
          id="data"
          valor={data}
          aoDigitar={event => setData(event.target.value)}
        />
        <GroupInput
          etiqueta="Quantidade"
          tipo="number"
          id="quantidade"
          min={0}
          step={1}
          valor={quantidade}
          aoDigitar={event => setQuantidade(event.target.value)}
        />
        <GroupInput
          etiqueta="Valor"
          id="valor"
          tipo="number"
          min={0}
          step={0.01}
          valor={valor}
          aoDigitar={event => setValor(event.target.value)}
        />
        <div className="col-0 d-flex align-items-end justify-content-end">
          <button
            className="btn btn-primary mt-3"
            type="submit"
            onClick={handleAdicionarNegociacao}
          >
            Incluir
          </button>
        </div>
      </div>
    </form>
  );
};

Formulario.propType = {
  quandoAdicionar: PropTypes.func.isRequired,
};
