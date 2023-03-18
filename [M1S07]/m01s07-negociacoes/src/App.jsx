import { Header } from './components/Header';
import { SubTitle } from './components/Subtitle';
import { Formulario } from './components/Formulario';
import { Tabela } from './components/Tabela';
import { useState } from 'react';

export const App = () => {
  // Inicia a variável 'negociacao' como um array vazio
  // cria a função 'setNegociacoes' para
  // inserir novo estado da 'negociacao'
  const [negociacoes, setNegociacoes] = useState([]);

  // É uma simples função para adicionar uma 'negociacao'
  // no array de 'negociacoes' a cada chamada
  // a 'negociacao' vem do módulo 'Formulário' no formato
  // objeto {key: value}
  function adicionarNegociacao(negociacao) {
    setNegociacoes([...negociacoes, negociacao]);
  }
  return (
    <div>
      <Header titulo="Negociações" />
      <SubTitle subtitulo="Tabela de Negociações" />
      <div className="container">
        <Formulario quandoAdicionar={adicionarNegociacao} />
        <Tabela negociacoes={negociacoes} />
        {/* OS COMPONENTES SERÃO ENCAIXADOS AQUI! */}
      </div>
    </div>
  );
};
