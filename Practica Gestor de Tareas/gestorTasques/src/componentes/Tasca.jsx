import React from 'react';
import { FaTrash } from 'react-icons/fa';

function Tasca({ id, text, completada, completarTasca, eliminarTasca }) {
  return (
    <div className={`tasca ${completada ? 'tascaCompletada' : ''}`} onClick={() => completarTasca(id)}>
      <p>{text}</p>
      <FaTrash onClick={(e) => {e.stopPropagation(); eliminarTasca(id);}} />
    </div>
  );
}

export default Tasca;