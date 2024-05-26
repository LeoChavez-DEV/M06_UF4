// src/pages/MoviesList.jsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/config';
import MovieCard from '../components/MovieCard';
import '../components/style/MovieList.css';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesCollection = await getDocs(collection(db, 'movies'));
        const moviesList = moviesCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('Películas obtenidas:', moviesList);
        setMovies(moviesList);
      } catch (error) {
        console.error('Error obteniendo las películas:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {movies.length === 0 && <p>No hay películas disponibles</p>}
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          image={movie.image}
          rate={movie.rate}
          direction={movie.direction}
        />
      ))}
    </div>
  );
};

export default MoviesList;
