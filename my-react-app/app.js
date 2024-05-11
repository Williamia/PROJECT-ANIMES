const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(cors())

let animes = [];

app.post('/animes', (req, res) => {
  const { name, image, characters, episodes, description, banner } = req.body;

  if (!name || !image || !characters || !Array.isArray(characters) || !banner) {
    return res.status(400).json({ message: 'Please provide name, image, banner, and an array of characters.' });
  }

  const newAnime = {
    id: animes.length + 1,
    name,
    image,
    characters,
    episodes,
    description,
    banner
  };

  animes.push(newAnime);

  res.status(201).json(newAnime);
});

app.post('/animes/:animeId/characters', (req, res) => {
  const animeId = parseInt(req.params.animeId);
  const { name, image } = req.body;

  const anime = animes.find(anime => anime.id === animeId);
  if (!anime) {
    return res.status(404).json({ message: 'Anime not found.' });
  }

  if (!name || !image) {
    return res.status(400).json({ message: 'Please provide name and image of the character.' });
  }

  const newCharacter = {
    name,
    image
  };

  anime.characters.push(newCharacter);

  res.status(201).json(newCharacter);
});

app.get('/animes', (req, res) => {
  res.json(animes);
});

app.get('/animes/:id', (req, res) => {
  const animeId = parseInt(req.params.id);

  const anime = animes.find(anime => anime.id === animeId);
  if (!anime) {
    return res.status(404).json({ message: 'Anime not found.' });
  }

  res.json(anime);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});