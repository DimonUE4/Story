// src/App.js
import React, { useState } from 'react';
import GenreList from './components/GenreList';
import StoryList from './components/StoryList';
import StoryPage from './components/StoryPage';
import './App.css'; // Общие стили

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setSelectedStory(null); // Сброс выбранной истории при смене жанра
  };

  const handleStorySelect = (story) => {
    setSelectedStory(story);
  };

  const handleBackToGenres = () => {
    setSelectedGenre(null);
    setSelectedStory(null); // Сброс выбранной истории
  };

  if (selectedStory) {
    return (
      <StoryPage story={selectedStory} onBack={handleBackToGenres} />
    );
  }

  if (selectedGenre) {
    return (
      <StoryList genre={selectedGenre} onStorySelect={handleStorySelect} onBack={handleBackToGenres} />
    );
  }

  return (
    <div className="app">
      <h1 className="app-title">Выберите жанр</h1>
      <GenreList onGenreSelect={handleGenreSelect} />
    </div>
  );
};

export default App;
