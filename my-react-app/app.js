const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para permitir análise do corpo da requisição (req.body)
app.use(bodyParser.json());

let animes = [];

// Rota para criar um novo anime
app.post('/animes', (req, res) => {
  const { nome, imagem, personagens } = req.body;

  // Verificar se todos os campos necessários foram fornecidos
  if (!nome || !imagem || !personagens || !Array.isArray(personagens)) {
    return res.status(400).json({ mensagem: 'Por favor, forneça nome, imagem e um vetor de personagens.' });
  }

  // Criar um novo anime
  const novoAnime = {
    id: animes.length + 1, // Gerar um ID único
    nome,
    imagem,
    personagens: personagens // Adicionando os personagens fornecidos ao vetor de personagens do anime
  };
  
  // Adicionar o novo anime ao vetor de animes
  animes.push(novoAnime);

  // Responder com o novo anime criado
  res.status(201).json(novoAnime);
});

// Rota para cadastrar um personagem em um anime específico
app.post('/animes/:animeId/personagens', (req, res) => {
  const animeId = parseInt(req.params.animeId);
  const { nome, imagem } = req.body;

  // Verificar se o anime existe
  const anime = animes.find(anime => anime.id === animeId);
  if (!anime) {
    return res.status(404).json({ mensagem: 'Anime não encontrado.' });
  }

  // Verificar se todos os campos necessários foram fornecidos
  if (!nome || !imagem) {
    return res.status(400).json({ mensagem: 'Por favor, forneça nome e imagem do personagem.' });
  }

  // Criar um novo personagem
  const novoPersonagem = {
    nome,
    imagem
  };

  // Adicionar o novo personagem ao anime específico
  anime.personagens.push(novoPersonagem);

  // Responder com o novo personagem criado
  res.status(201).json(novoPersonagem);
});

// Rota de exemplo para listar todos os animes
app.get('/animes', (req, res) => {
  res.json(animes);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});