const data = {
    animes: [
      {
        id: 1,
        title: "Naruto",
        imageUrl: "https://i.pinimg.com/564x/4f/e6/1c/4fe61cd16aa26ab1d2e9aa75a8874f8a.jpg",
        description:"Naruto é um anime baseado no mangá de mesmo nome escrito por Masashi Kishimoto. A série gira em torno das aventuras vividas por Naruto Uzumaki, um jovem órfão habitante da Aldeia da Folha que sonha em se tornar o quinto Hokage, o maior guerreiro e governante da vila. Ao se graduar como ninja, Naruto descobre que tem um demônio raposa selado dentro de si. Seu pai, o quarto Hokage, aprisionou a raposa no próprio filho quando a entidade ameaçava destruir a Aldeia da Folha, sacrificando assim a própria vida. Ao lado dos colegas, em especial Sakura, Sasuke e o mentor Kakashi Hatake, ele persegue a árdua missão de se tornar o maior ninja e deter aqueles que planejam fazer mal à sua cidade. O jovem trio que se forma quando Naruto está em busca de treinamento embarca em diversas missões para a aldeia e, durante o exame ninja, surge o vilão Orochimaru, um criminoso procurado.",
        episodes:"720 episódios",
        characters: [
          { id: 101, name: "Naruto Uzumaki", imageUrl: "url_para_imagem_naruto.jpg" },
          { id: 102, name: "Sasuke Uchiha", imageUrl: "url_para_imagem_sasuke.jpg" },
          { id: 103, name: "Sakura Haruno", imageUrl: "url_para_imagem_sakura.jpg" }
        ]
      },
      {
        id: 2,
        title: "One Piece",
        imageUrl: "https://i.pinimg.com/564x/12/34/2e/12342e17dc3979e45125c47b2225a431.jpg",
        description:"Em One Piece, conhecemos as aventuras de Monkey D. Luffy e sua equipe de piratas, navegando por oceanos fantásticos e ilhas exóticas em busca do maior tesouro já deixado pelo lendário Gold Roger. Luffy acredita na lenda do tesouro e sai em uma busca extraordinária na esperança de proclamar para si o título de Rei dos Piratas. Logo no início da jornada, Luffy conhece Roronoa Zoro, um espadachim musculoso que se torna o seu braço direito durante a expedição. Eles são acompanhados pela jovem ladra Nami, o atirador mentiroso Usopp, e Sanji, o chefe de cozinha da embarcação. Após adquirirem um navio, à medida que avançam mar a dentro e vivem novas aventuras, outros membros passam a integrar a tripulação de piratas, como o médico Tony Tony Chopper e a arqueóloga Nico Robin. A equipe comandada por Luffy enfrenta todo tipo de desafio, desde piratas como eles, até organizações criminosas, revolucionários, agentes secretos e soldados. ",
        episodes:"1076 Episódios",
        banner: "https://i.pinimg.com/564x/e9/c7/47/e9c747d50828cfaa8439208ec3627cfd.jpg",
        characters: [
          { id: 201, name: "Monkey D. Luffy", imageUrl: "url_para_imagem_luffy.jpg" },
          { id: 202, name: "Roronoa Zoro", imageUrl: "url_para_imagem_zoro.jpg" },
          { id: 203, name: "Nami", imageUrl: "url_para_imagem_nami.jpg" }
        ]
      },
      {
        id: 3,
        title: "HunterxHunter",
        imageUrl: "https://i.pinimg.com/564x/51/fe/ae/51feae5c92aa56d3c42858a0f8671fe3.jpg",
        description:"Em Hunter x Hunter, o jovem Gon se apega ao legado de seu desconhecido pai e sonha em se tornar um Hunter, um caçador de tesouros e artefatos místicos. Ao descobrir que o pai está vivo, ele sai em uma missão para encontrá-lo enquanto tenta se tornar um Hunter profissional. Ele conhece Killua, Kurapika e Leorio, que compartilham as mesmas aspirações que ele e juntos embarcam em perigosas e emocionantes aventuras.",
        episodes:"148 episódios",
        characters: [
          { id: 301, name: "Goku", imageUrl: "url_para_imagem_goku.jpg" },
          { id: 302, name: "Vegeta", imageUrl: "url_para_imagem_vegeta.jpg" },
          { id: 303, name: "Piccolo", imageUrl: "url_para_imagem_piccolo.jpg" }
        ]
      },
      {
        id: 4,
        title: "Chainsaw man",
        imageUrl: "https://i.pinimg.com/564x/5c/4b/fb/5c4bfbda717cbefac5fc52c93ab5afab.jpg",
        description:"Chainsaw Man acompanha a história do jovem Denji, que ficou endividado após a morte do pai. Por um acaso do destino, o protagonista salva um cão-Demônio chamado Pochita, ele passa a receber dinheiro para matar demônios para a Yakuza. O cãozinho, Pochita, tem uma peculiar motosserra atrelada ao focinho e, com isso, Denji consegue exterminar os alvos. No entanto, ele é traído pela organização e é morto pelo Zombie Devil, mas Pochita faz o maior sacrifício possível, e salva Denji. Após o incidente, o protagonista renasce como metade humano, metade demônio, capaz de criar motosserras pelo corpo ao puxar uma cordão do peito. Pelos poderes excepcionais que possui, Denji é recrutado para trabalhar na Public Safety Devil Hunters, para continuar matando demônios, mas sob risco de morte por ser, tecnicamente, um demônio.",
        episodes:"24 episódios",
        characters: [
          { id: 301, name: "Goku", imageUrl: "url_para_imagem_goku.jpg" },
          { id: 302, name: "Vegeta", imageUrl: "url_para_imagem_vegeta.jpg" },
          { id: 303, name: "Piccolo", imageUrl: "url_para_imagem_piccolo.jpg" }
        ]
      },
      {
        id: 5,
        title: "Haikyuu",
        imageUrl: "https://i.pinimg.com/564x/0b/29/42/0b2942a631ec3f7502eea5e6c36c193a.jpg",
        description:"A história gira em torno de Hinata Shoyo, um aluno do ensino médio que sonha em ser jogador de vôlei depois que assistiu a um campeonato pela televisão. O grande problema: ele é baixinho, e jogar vôlei com a rede daquela altura não é tarefa fácil. Mas Hinata já demonstra sua determinação e cria um clube de vôlei. No início, ninguém se junta a ele, mas depois aparecem outros cinco alunos que integram o time.",
        episodes:"85 episódios",
        characters: [
          { id: 301, name: "Goku", imageUrl: "url_para_imagem_goku.jpg" },
          { id: 302, name: "Vegeta", imageUrl: "url_para_imagem_vegeta.jpg" },
          { id: 303, name: "Piccolo", imageUrl: "url_para_imagem_piccolo.jpg" }
        ]
      },
      {
        id: 6,
        title: "Dr. Stone",
        imageUrl: "https://i.pinimg.com/564x/dd/44/4c/dd444cb5284dacebc1aaaf158ddb09b3.jpg",
        description:"Milhares de anos após um misterioso fenômeno transformar a humanidade inteira em pedra, desperta um garoto extraordinariamente inteligente e motivado pela ciência - Senku Ishigami. Diante de um mundo de pedra e do colapso generalizado da civilização, Senku decide usar sua mente para reconstruir o mundo. Ao lado de Taiju Oki, seu amigo de infância absurdamente forte, eles começam a reestabelecer a civilização do zero... Representando os dois milhões de anos da história da ciência, desde a Idade da Pedra até os dias atuais, esta aventura científica sem precedentes está prestes a começar!",
        episodes:"35 episódios",
        characters: [
          { id: 301, name: "Goku", imageUrl: "url_para_imagem_goku.jpg" },
          { id: 302, name: "Vegeta", imageUrl: "url_para_imagem_vegeta.jpg" },
          { id: 303, name: "Piccolo", imageUrl: "url_para_imagem_piccolo.jpg" }
        ]
      },
      {
        id: 7,
        title: "Kakegurui",
        imageUrl: "https://i.pinimg.com/564x/23/9f/28/239f28d4d27f04a4a94f56d5d5a88ef7.jpg",
        description:"Kakegurui é um anime que se passa em uma prestigiosa academia onde os alunos são filhos de famílias ricas e influentes. No entanto, essa academia tem uma reviravolta única: é um lugar onde o jogo é a principal forma de hierarquia social. Os alunos apostam grandes somas de dinheiro em vários jogos de azar, desde jogos de cartas até apostas extremamente arriscadas. A história segue a protagonista, Yumeko Jabami, uma estudante recém-transferida que rapidamente se destaca por seu comportamento excêntrico e obsessão pelo jogo. Ela não está interessada apenas em ganhar dinheiro, mas sim em desafiar os limites e testar os instintos dos outros jogadores. Sua chegada na academia traz uma nova onda de caos e emoção para o mundo do jogo, enquanto ela enfrenta outros alunos, cada um com suas próprias motivações e segredos.",
        episodes:"24 episódios",
        characters: [
          { id: 301, name: "Goku", imageUrl: "url_para_imagem_goku.jpg" },
          { id: 302, name: "Vegeta", imageUrl: "url_para_imagem_vegeta.jpg" },
          { id: 303, name: "Piccolo", imageUrl: "url_para_imagem_piccolo.jpg" }
        ]
      }
    ]
  };
  
  export default data;