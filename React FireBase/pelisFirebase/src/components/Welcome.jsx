import React from 'react';
import IndexMenu from './IndexMenu';

const Welcome = ({ username }) => {
  return (
    <div>
      <h1>Hola, {username}!</h1>
      <p>Pel·lícules per a l’estiu</p>
      <IndexMenu />
    </div>
  );
};

export default Welcome;
