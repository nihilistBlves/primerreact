import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Saludo from './components/Saludo/Saludo';
import reportWebVitals from './reportWebVitals';
import Metodos from './components/Metodos/Metodos';
import SumarNumeros from './components/SumarNumeros/SumarNumeros'
import App from './components/App/App';
import MatematicasPadre from './components/MatematicasPadre/MatematicasPadre';
import Contador from './components/Contador/Contador';
import DibujoPadre from './components/DibujoPadre/DibujoPadre';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <DibujoPadre />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
