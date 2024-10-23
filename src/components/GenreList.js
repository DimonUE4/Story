// src/components/GenreList.js
import React from 'react';
import GenreCard from './GenreCard';
import './GenreList.css'; // Импорт стилей

const genres = [
  { id: 1, name: 'Романтика', description: 'Истории о любви и страсти.' },
  { id: 2, name: 'Хоррор', description: 'Ужасающие и напряженные истории.' },
  { id: 3, name: 'Фантастика', description: 'Ужасающие и напряженные истории.' },
  { id: 4, name: 'Криминал', description: 'Ужасающие и напряженные истории.' },
  { id: 5, name: 'Триллер', description: 'Ужасающие и напряженные истории.' },
  { id: 6, name: 'На реальных событиях', description: 'Ужасающие и напряженные истории.' },
  { id: 7, name: 'Спорт', description: 'Ужасающие и напряженные истории.' },
  // Добавьте другие жанры здесь
];

const GenreList = ({ onGenreSelect }) => {
  return (
    <div className="genre-list">
      {genres.map((genre) => (
        <GenreCard
          key={genre.id}
          genre={genre}
          onClick={() => onGenreSelect(genre)}
        />
      ))}
    </div>
  );
};

export default GenreList;
