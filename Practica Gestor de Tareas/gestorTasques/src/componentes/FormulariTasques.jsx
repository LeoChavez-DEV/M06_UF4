import React, { useState } from 'react';

function FormulariTasques({ funcAfegirTasca }) {
  const [textTasca, setTextTasca] = useState('');

  const canviTextTasca = (e) => {
    setTextTasca(e.target.value);
  };

  const enviarForm = (e) => {
    e.preventDefault();
    if (textTasca.trim()) {
      funcAfegirTasca({ titol: textTasca, completada: false });
      setTextTasca('');
    }
  };

  return (
    <form onSubmit={enviarForm}>
      <input type="text" value={textTasca} onChange={canviTextTasca} />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

export default FormulariTasques;