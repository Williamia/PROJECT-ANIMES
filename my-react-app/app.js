const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Anime = require('./src/models/anime');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://wiusk8:3L0OeYWQ1iu047ns@animedb.3dq00ha.mongodb.net/?retryWrites=true&w=majority&appName=AnimeDB';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Could not connect to MongoDB Atlas', err));

app.use(bodyParser.json());

app.use(cors())

// Remova a variável "animes" que armazenava os dados em memória

app.post('/animes', (req, res) => {
  const { name, image, characters, episodes, description, banner } = req.body;

  if (!name || !image || !characters || !Array.isArray(characters) || !banner) {
    return res.status(400).json({ message: 'Please provide name, image, banner, and an array of characters.' });
  }

  const newAnime = new Anime({
    name,
    image,
    characters,
    episodes,
    description,
    banner
  });

  newAnime.save()
    .then(anime => {
      res.status(201).json(anime);
    })
    .catch(err => {
      console.error('Error creating anime:', err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

app.post('/animes/:animeId/characters', (req, res) => {
  const animeId = req.params.animeId;
  const { name, image } = req.body;

  Anime.findById(animeId)
    .then(anime => {
      if (!anime) {
        return res.status(404).json({ message: 'Anime not found.' });
      }

      if (!name || !image) {
        return res.status(400).json({ message: 'Please provide name and image of the character.' });
      }

      anime.characters.push({ name, image });
      return anime.save();
    })
    .then(anime => {
      res.status(201).json(anime.characters[anime.characters.length - 1]);
    })
    .catch(err => {
      console.error('Error creating character:', err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

app.get('/animes', (req, res) => {
  Anime.find()
    .then(animes => {
      res.json(animes);
    })
    .catch(err => {
      console.error('Error fetching animes:', err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

app.get('/animes/:id', (req, res) => {
  const animeId = req.params.id;

  Anime.findById(animeId)
    .then(anime => {
      if (!anime) {
        return res.status(404).json({ message: 'Anime not found.' });
      }
      res.json(anime);
    })
    .catch(err => {
      console.error('Error fetching anime:', err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

app.delete('/animes/:id', (req, res) => {
  const animeId = req.params.id;

  Anime.findByIdAndDelete(animeId)
    .then(anime => {
      if (!anime) {
        return res.status(404).json({ message: 'Anime not found.' });
      }
      res.status(204).end();
    })
    .catch(err => {
      console.error('Error deleting anime:', err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

app.patch('/animes/:animeId/characters/:characterId', (req, res) => {
  const animeId = req.params.animeId;
  const characterId = req.params.characterId;
  const { name, image } = req.body;

  Anime.findById(animeId)
    .then(anime => {
      if (!anime) {
        return res.status(404).json({ message: 'Anime not found.' });
      }

      const characterToUpdate = anime.characters.find(character => character._id == characterId);
      if (!characterToUpdate) {
        return res.status(404).json({ message: 'Character not found.' });
      }

      if (name) {
        characterToUpdate.name = name;
      }
      if (image) {
        characterToUpdate.image = image;
      }

      return anime.save();
    })
    .then(anime => {
      res.json(anime);
    })
    .catch(err => {
      console.error('Error updating character:', err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

app.delete('/animes/:animeId/characters/:characterId', (req, res) => {
  const animeId = req.params.animeId;
  const characterId = req.params.characterId;

  Anime.findById(animeId)
    .then(anime => {
      if (!anime) {
        return res.status(404).json({ message: 'Anime not found.' });
      }

      const characterToDeleteIndex = anime.characters.findIndex(character => character._id == characterId);
      if (characterToDeleteIndex === -1) {
        return res.status(404).json({ message: 'Character not found.' });
      }

      anime.characters.splice(characterToDeleteIndex, 1);
      return anime.save();
    })
    .then(anime => {
      res.json(anime);
    })
    .catch(err => {
      console.error('Error deleting character:', err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

app.patch('/animes/:id', (req, res) => {
  const animeId = req.params.id;
  const { name, image, characters, episodes, description, banner } = req.body;

  Anime.findByIdAndUpdate(animeId, { name, image, characters, episodes, description, banner }, { new: true })
    .then(anime => {
      if (!anime) {
        return res.status(404).json({ message: 'Anime not found.' });
      }
      res.json(anime);
    })
    .catch(err => {
      console.error('Error updating anime:', err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});