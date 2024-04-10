import React, { useState } from 'react';
import Botoncito from './boton';
import Panel from './panel'; 

const App = () => {
  const [numClicks, setNumClicks] = useState(0);

  const incrementNum = () => {
    setNumClicks(numClicks + 1);
    console.log("Incrementando número de clics...");
  };

  const reiniciarNum = () => {
    setNumClicks(0);
    console.log("Reiniciando número de clics...");
  };

  return (
    <div id='bloque'>
      <Panel numClicks={numClicks} /> 
      <Botoncito
        text="Clic"
        onClick={incrementNum}
        esClick={true}
      />
      <Botoncito
        text="Reiniciar"
        onClick={reiniciarNum}
        esClick={false}
      />
    </div>
  );
};

export default App;
