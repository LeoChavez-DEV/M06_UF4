import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/config';

const MoviesAdd = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [direction, setDirection] = useState('');
  const [image, setImage] = useState('');
  const [rate, setRate] = useState(1);
  const [year, setYear] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newMovie = {
        title,
        description,
        direction,
        image,
        rate,
        year,
        duration,
      };
      console.log('Añadiendo película:', newMovie);
      await addDoc(collection(db, 'movies'), newMovie);
      alert('Película añadida correctamente');
    } catch (error) {
      console.error('Error añadiendo el documento: ', error);
      alert('Hubo un error al añadir la película.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" required />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción" required />
      <input value={direction} onChange={(e) => setDirection(e.target.value)} placeholder="Dirección" required />
      <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="URL de la imagen" required />
      <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="Nota" min="1" max="5" required />
      <input value={year} onChange={(e) => setYear(e.target.value)} placeholder="Año" required />
      <input value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duración (min)" required />
      <button type="submit">Añadir película</button>
    </form>
  );
};

export default MoviesAdd;
