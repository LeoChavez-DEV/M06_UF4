import React from 'react';

const Botoncito = ({ text, onClick, esClick }) => {
  return (
    <button onClick={onClick}>
      {esClick ? '' : ''}{text}
    </button>
  );
};

export default Botoncito;
