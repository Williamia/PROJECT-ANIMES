const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: String,
  image: String
});

const animeSchema = new mongoose.Schema({
  name: String,
  image: String,
  characters: [characterSchema], // Referenciando o schema do personagem
  episodes: Number,
  description: String,
  banner: String
});

const Anime = mongoose.model('Anime', animeSchema);

module.exports = Anime;