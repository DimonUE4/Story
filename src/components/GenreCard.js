// src/components/GenreCard.js
import React from 'react';
import './GenreCard.css';

function GenreCard({ genre, onClick }) {
  return (
    <div className="genre-card" onClick={onClick}>
      <h2 className="name_story">{genre.name}</h2>
      <h3 className="descript">{genre.description}</h3>
      
    </div>
  );
}

export default GenreCard;
