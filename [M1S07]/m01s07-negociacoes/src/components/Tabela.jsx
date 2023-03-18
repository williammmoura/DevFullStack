import PropTypes from 'prop-types';

export const Tabela = props => {
  const { negociacoes } = props;

  // Função para totalizar a coluna de subtotais
  // Como não existe o item subtotal na 'negociacao'
  // foi necessário efetuar um reduce e usar os itens
  var total = negociacoes.reduce(getTotal, 0);
  function getTotal(total, negociacao) {
    return total + negociacao.quantidade * negociacao.valor;
  }

  return (
    <div className="my-5">
      <table className="table table-hover table-bordered">
        <thead className="table-primary">
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
          </tr>
        </thead>

        <tbody>
          {negociacoes.map((negociacao, index) => (
            <tr key={index}>
              <td>{negociacao.data}</td>
              <td>{negociacao.quantidade}</td>
              <td>
                {Number(negociacao.valor).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </td>
              <td>
                {(
                  Number(negociacao.quantidade) * Number(negociacao.valor)
                ).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan="3"></td>
            <td>
              {total.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
Tabela.propType = {
  negociacoes: PropTypes.array.isRequired,
};
