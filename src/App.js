import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import Calculos from './components/Calculos'

function App() {

  const name = 'André'
  const newName = name.toUpperCase()

  const url = 'https:/via.placeholder.com/120'

  return (
    <div className="App">
     <h2>Alterando o JSX</h2>
     <p>Olá {newName}</p>
     <Calculos />
     <img src={url} alt="minha-imagem"/>
     <HelloWorld />
    </div>
  );
}

export default App;
