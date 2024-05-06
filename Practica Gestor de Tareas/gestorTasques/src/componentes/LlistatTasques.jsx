import React, { useState } from 'react';
import Tasca from './Tasca';
import FormulariTasques from './FormulariTasques';

function LlistatTasques() {
  const [tasques, setTasques] = useState([]);

  const afegirTasca = (tascaNova) => {
    setTasques([...tasques, tascaNova]);
  };

  const eliminarTasca = (id) => {
    const tasquesRestants = tasques.filter((tasca, index) => index !== id);
    setTasques(tasquesRestants);
  };

  const completarTasca = (id) => {
    const tasquesActualitzades = tasques.map((tasca, index) => {
      if (index === id) {
        return { ...tasca, completada: !tasca.completada };
      }
      return tasca;
    });
    setTasques(tasquesActualitzades);
  };

  return (
    <div>
      <h1>Mis Tareas</h1>
      <FormulariTasques funcAfegirTasca={afegirTasca} />
      {tasques.map((tasca, index) => (
        <Tasca
          key={index}
          id={index}
          text={tasca.titol}
          completada={tasca.completada}
          completarTasca={completarTasca}
          eliminarTasca={eliminarTasca}
        />
      ))}
    </div>
  );
}

export default LlistatTasques;