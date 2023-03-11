import './App.css';
import Card from './Card/Card';

function App() {
  // Criando um contato com chaves:valor
  const contato = {
    nome: 'Erico Couto Jr.',
    idade: '54',
    imagem: 'https://avatars.githubusercontent.com/u/63860659?v=4',
    alt: 'Foto Erico',
    github: 'https://github.com/EricoCoutoJr',
    linkdin: 'https://www.linkedin.com/in/ericocoutojr/',
    instagram: 'https://www.instagram.com/ericocoutojr/',
  };

  // Enviando o objeto com chaves:valor através do contato para
  // o módulo Card
  return (
    <div>
      <Card contato={contato} />
    </div>
  );
}

export default App;
