import Saludo from '../Saludo/Saludo';
import './App.css';

function App() {

  const metodoPadre = (mensaje) => {
    console.log("Soy " + mensaje);
  }

  return (
    <div className="App">
      <Saludo nombre="Alejo" edad="22" metodoPadre={metodoPadre} nombre="Alejo" edad="22 años"/>
    </div>
  );
}

export default App;
