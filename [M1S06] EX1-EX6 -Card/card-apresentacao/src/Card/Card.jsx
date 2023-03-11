// import PtroTypes from 'prop-types' também pode ser utilizado
import * as ProtTypes from 'prop-types';
import './Card.css';

function Card({ contato }) {
  // Recebendo um objeto de chave:valor para retornar um
  // um conjunto de tags associadas as chaves:valores

  return (
    <div className="card">
      <img className="card-foto" src={contato.imagem} alt={contato.alt} />
      <div className="card-dados">
        <h2>Nome:{contato.nome}</h2>
        <h4>Idade: {contato.idade} anos</h4>
        <div className="card-contatos">
          <a href={contato.github} target="_blank">
            <box-icon
              type="logo"
              name="github"
              color="black"
              size="md"
              title="Link para o GitHub"
            ></box-icon>
          </a>
          <a href={contato.linkedin} target="_blank">
            <box-icon
              type="logo"
              name="linkedin"
              color="black"
              size="md"
              title="Link para o LinkedIn"
            ></box-icon>
          </a>
          <a href={contato.instagram} target="_blank">
            <box-icon
              type="logo"
              name="instagram"
              color="black"
              size="md"
              title="Link para o Instagram"
            ></box-icon>
          </a>
        </div>
      </div>
    </div>
  );
}
// O código abaixo tem a função de controle de fornecimento das
// props... exige que seja enviado props do tipo string
//
Card.protTypes = {
  src: ProtTypes.string.isRequired,
  alt: ProtTypes.string.isRequired,
};

export default Card;
