import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [stateCar, setStateCar]  = useState(false);
  const [contar, setContar] = useState(0);

  const EncenderApagar = () => {
    // setStateCar(!stateCar);
    setStateCar(prevValue => !prevValue);
    setContar(contar + 1);
  }

useEffect(() => {
  // Ejecutar 
  console.log("Total: "+contar);
}, [contar])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <h3>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
         <h4>Clicks: {contar}</h4>
        <button onClick={EncenderApagar}> Encender / Apagar</button>
      </header>
    </div>
  );
}

export default App;
