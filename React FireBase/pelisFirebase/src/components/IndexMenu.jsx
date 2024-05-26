import React from 'react';
import { Link } from 'react-router-dom';

const IndexMenu = () => {
  return (
    <div>
      <Link to="/movies/list">
        <div className="card">Listado de películas</div>
      </Link>
      <Link to="/movies/add">
        <div className="card">Añadir una película</div>
      </Link>
    </div>
  );
};

export default IndexMenu;
