import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'André'
  const newName = name.toUpperCase()

  function soma(a,b,c){
    return a + b + c;
  }

  function subt (a,b,c){
    return a - b - c;
  }

  function multi (a,b,c){
    return a * b * c;
  }

  function divis (a,b){
    return a / b;
  }

  const url = 'https:/via.placeholder.com/120'

  return (
    <div className="App">
     <h2>Alterando o JSX</h2>
     <p>Olá {newName}</p>
     <p>Soma: {soma(2, 2, 3)}</p>
     <p>Subtração: {subt(10, 2, 3)}</p>
     <p>Multiplicação: {multi(10, 2, 3)}</p>
     <p>Divisão: {divis(10, 2)}</p>
     <img src={url} alt="minha-imagem"/>
    </div>
  );
}

export default App;
