// Array contendo os 52 filmes
const moviesData = [
  // Ação
  { id: 1, title: "Mad Max: Estrada da Fúria", genre: "Ação", year: 2015, rating: 8.1, img: "https://via.placeholder.com/200x300?text=Mad+Max", overview: "Em um mundo pós-apocalíptico, Max se une a Furiosa para escapar de um tirano." },
  { id: 2, title: "John Wick", genre: "Ação", year: 2014, rating: 7.4, img: "https://via.placeholder.com/200x300?text=John+Wick", overview: "Um ex-assassino sai da aposentadoria para buscar vingança." },
  { id: 3, title: "Gladiador", genre: "Ação", year: 2000, rating: 8.5, img: "https://via.placeholder.com/200x300?text=Gladiador", overview: "Um ex-general romano busca vingança contra o imperador corrupto." },
  { id: 4, title: "Batman: O Cavaleiro das Trevas", genre: "Ação", year: 2008, rating: 9.0, img: "https://via.placeholder.com/200x300?text=Batman", overview: "Batman enfrenta o Coringa em uma batalha pelo destino de Gotham." },
  { id: 5, title: "Vingadores: Ultimato", genre: "Ação", year: 2019, rating: 8.4, img: "https://via.placeholder.com/200x300?text=Vingadores", overview: "Os heróis restantes tentam desfazer as ações de Thanos." },
  { id: 6, title: "Top Gun: Maverick", genre: "Ação", year: 2022, rating: 8.3, img: "https://via.placeholder.com/200x300?text=Top+Gun", overview: "Maverick treina uma nova turma de pilotos para uma missão especial." },
  { id: 7, title: "Missão Impossível: Efeito Fallout", genre: "Ação", year: 2018, rating: 7.7, img: "https://via.placeholder.com/200x300?text=MI+Fallout", overview: "Ethan Hunt e sua equipe correm contra o tempo após uma missão dar errado." },
  { id: 8, title: "O Resgate do Soldado Ryan", genre: "Ação", year: 1998, rating: 8.6, img: "https://via.placeholder.com/200x300?text=Soldado+Ryan", overview: "Capitão Miller lidera equipe para resgatar um paraquedista na 2ª Guerra." },
  { id: 9, title: "Pantera Negra", genre: "Ação", year: 2018, rating: 7.3, img: "https://via.placeholder.com/200x300?text=Pantera+Negra", overview: "T'Challa retorna a Wakanda para assumir o trono como rei." },
  { id: 10, title: "O Exterminador do Futuro 2", genre: "Ação", year: 1991, rating: 8.6, img: "https://via.placeholder.com/200x300?text=Terminator+2", overview: "Cyborg é enviado no tempo para proteger o jovem John Connor." },
  { id: 11, title: "Duro de Matar", genre: "Ação", year: 1988, rating: 8.2, img: "https://via.placeholder.com/200x300?text=Duro+de+Matar", overview: "Policial tenta salvar sua esposa e reféns em um arranha-céu." },
  { id: 12, title: "Homem de Ferro", genre: "Ação", year: 2008, rating: 7.9, img: "https://via.placeholder.com/200x300?text=Homem+de+Ferro", overview: "Industrial bilionário constrói uma armadura para combater o crime." },
  { id: 13, title: "Atômica", genre: "Ação", year: 2017, rating: 6.7, img: "https://via.placeholder.com/200x300?text=Atomica", overview: "Espiã britânica investiga uma rede de espionagem durante a Guerra Fria." },

  // Ficção Científica
  { id: 14, title: "Interestelar", genre: "Ficção Científica", year: 2014, rating: 8.7, img: "https://via.placeholder.com/200x300?text=Interestelar", overview: "Um grupo de exploradores viaja através de um buraco de minhoca no espaço." },
  { id: 15, title: "A Origem", genre: "Ficção Científica", year: 2010, rating: 8.8, img: "https://via.placeholder.com/200x300?text=A+Origem", overview: "Ladrão que rouba segredos corporativos através de sonhos recebe tarefa inversa." },
  { id: 16, title: "Matrix", genre: "Ficção Científica", year: 1999, rating: 8.7, img: "https://via.placeholder.com/200x300?text=Matrix", overview: "Hacker descobre a verdade sobre sua realidade simulada." },
  { id: 17, title: "Blade Runner 2049", genre: "Ficção Científica", year: 2017, rating: 8.0, img: "https://via.placeholder.com/200x300?text=Blade+Runner", overview: "Novo caçador de replicantes descobre segredo que pode causar caos." },
  { id: 18, title: "Duna", genre: "Ficção Científica", year: 2021, rating: 8.0, img: "https://via.placeholder.com/200x300?text=Duna", overview: "Jovem nobre precisa proteger o recurso mais valioso do universo." },
  { id: 19, title: "Chegada", genre: "Ficção Científica", year: 2016, rating: 7.9, img: "https://via.placeholder.com/200x300?text=Chegada", overview: "Linguista é recrutada para se comunicar com visitantes alienígenas." },
  { id: 20, title: "De Volta para o Futuro", genre: "Ficção Científica", year: 1985, rating: 8.5, img: "https://via.placeholder.com/200x300?text=De+Volta+Futuro", overview: "Adolescente é acidentalmente enviado para 1955 em um DeLorean." },
  { id: 21, title: "Perdido em Marte", genre: "Ficção Científica", year: 2015, rating: 8.0, img: "https://via.placeholder.com/200x300?text=Perdido+em+Marte", overview: "Astronauta presumido morto luta para sobreviver sozinho em Marte." },
  { id: 22, title: "Gravidade", genre: "Ficção Científica", year: 2013, rating: 7.7, img: "https://via.placeholder.com/200x300?text=Gravidade", overview: "Dois astronautas trabalham juntos para sobreviver após acidente em órbita." },
  { id: 23, title: "Minority Report", genre: "Ficção Científica", year: 2002, rating: 7.6, img: "https://via.placeholder.com/200x300?text=Minority+Report", overview: "Em um futuro sem crimes, chefe da divisão pré-crime é acusado de futuro assassinato." },
  { id: 24, title: "Jurassic Park", genre: "Ficção Científica", year: 1993, rating: 8.2, img: "https://via.placeholder.com/200x300?text=Jurassic+Park", overview: "Parque de dinossauros clonados sofre falha catastrófica de segurança." },
  { id: 25, title: "O Quinto Elemento", genre: "Ficção Científica", year: 1997, rating: 7.6, img: "https://via.placeholder.com/200x300?text=Quinto+Elemento", overview: "Taxista do século 23 se torna chave para salvar a Terra do Mal." },
  { id: 26, title: "Ex Machina", genre: "Ficção Científica", year: 2014, rating: 7.7, img: "https://via.placeholder.com/200x300?text=Ex+Machina", overview: "Programador participa de experimento de inteligência artificial com um humanoide." },

  // Drama
  { id: 27, title: "Um Sonho de Liberdade", genre: "Drama", year: 1994, rating: 9.3, img: "https://via.placeholder.com/200x300?text=Sonho+Liberdade", overview: "Banqueiro injustamente condenado forma amizade duradoura na prisão." },
  { id: 28, title: "O Poderoso Chefão", genre: "Drama", year: 1972, rating: 9.2, img: "https://via.placeholder.com/200x300?text=Poderoso+Chefao", overview: "O patriarca de uma dinastia do crime transfere o controle a seu filho relutante." },
  { id: 29, title: "Forrest Gump", genre: "Drama", year: 1994, rating: 8.8, img: "https://via.placeholder.com/200x300?text=Forrest+Gump", overview: "A vida de um homem simples testemunha momentos marcantes da história." },
  { id: 30, title: "Clube da Luta", genre: "Drama", year: 1999, rating: 8.8, img: "https://via.placeholder.com/200x300?text=Clube+da+Luta", overview: "Trabalhador insone forma clube de lutas clandestinas que ganha grandes proporções." },
  { id: 31, title: "Parasita", genre: "Drama", year: 2019, rating: 8.5, img: "https://via.placeholder.com/200x300?text=Parasita", overview: "Família desempregada se infiltra na rotina de uma família rica." },
  { id: 32, title: "Whiplash", genre: "Drama", year: 2014, rating: 8.5, img: "https://via.placeholder.com/200x300?text=Whiplash", overview: "Jovem baterista busca a perfeição sob a tutela de instrutor impiedoso." },
  { id: 33, title: "O Grande Truque", genre: "Drama", year: 2006, rating: 8.5, img: "https://via.placeholder.com/200x300?text=O+Grande+Truque", overview: "Dois ilusionistas do século XIX entram em rivalidade obsessiva." },
  { id: 34, title: "A Lista de Schindler", genre: "Drama", year: 1993, rating: 9.0, img: "https://via.placeholder.com/200x300?text=Lista+Schindler", overview: "Empresário salva vidas de mais de mil refugiados judeus no Holocausto." },
  { id: 35, title: "Coringa", genre: "Drama", year: 2019, rating: 8.4, img: "https://via.placeholder.com/200x300?text=Coringa", overview: "Comediante fracassado mergulha no caos em Gotham City." },
  { id: 36, title: "O Show de Truman", genre: "Drama", year: 1998, rating: 8.2, img: "https://via.placeholder.com/200x300?text=Show+de+Truman", overview: "Homem descobre que sua vida inteira é um reality show de TV." },
  { id: 37, title: "O Abutre", genre: "Drama", year: 2014, rating: 7.8, img: "https://via.placeholder.com/200x300?text=O+Abutre", overview: "Jovem desesperado entra no submundo do jornalismo policial de Los Angeles." },
  { id: 38, title: "A Rede Social", genre: "Drama", year: 2010, rating: 7.8, img: "https://via.placeholder.com/200x300?text=Rede+Social", overview: "A história da criação do Facebook e os conflitos judiciais decorrentes." },
  { id: 39, title: "Brilho Eterno de uma Mente sem Lembranças", genre: "Drama", year: 2004, rating: 8.3, img: "https://via.placeholder.com/200x300?text=Brilho+Eterno", overview: "Casal se submete a procedimento para apagar memórias um do outro." },

  // Animação
  { id: 40, title: "Homem-Aranha: No Aranhaverso", genre: "Animação", year: 2018, rating: 8.4, img: "https://via.placeholder.com/200x300?text=Aranhaverso", overview: "Miles Morales se torna o Homem-Aranha e cruza caminhos com universos paralelos." },
  { id: 41, title: "A Viagem de Chihiro", genre: "Animação", year: 2001, rating: 8.6, img: "https://via.placeholder.com/200x300?text=Chihiro", overview: "Garota navega por um mundo de espíritos para salvar seus pais transformados." },
  { id: 42, title: "Toy Story", genre: "Animação", year: 1995, rating: 8.3, img: "https://via.placeholder.com/200x300?text=Toy+Story", overview: "Brinquedos ganham vida quando seus donos não estão por perto." },
  { id: 43, title: "WALL-E", genre: "Animação", year: 2008, rating: 8.4, img: "https://via.placeholder.com/200x300?text=WALL-E", overview: "Robô compactador de lixo embarca em jornada espacial que muda o futuro da humanidade." },
  { id: 44, title: "Divertida Mente", genre: "Animação", year: 2015, rating: 8.1, img: "https://via.placeholder.com/200x300?text=Divertida+Mente", overview: "As emoções de uma garota tentam guiá-la através de uma grande mudança em sua vida." },
  { id: 45, title: "Procurando Nemo", genre: "Animação", year: 2003, rating: 8.2, img: "https://via.placeholder.com/200x300?text=Procurando+Nemo", overview: "Peixe-palhaço tímido cruza o oceano em busca de seu filho perdido." },
  { id: 46, title: "Up: Altas Aventuras", genre: "Animação", year: 2009, rating: 8.3, img: "https://via.placeholder.com/200x300?text=Up", overview: "Idoso viaja para a América do Sul em casa suspensa por balões." },
  { id: 47, title: "O Rei Leão", genre: "Animação", year: 1994, rating: 8.5, img: "https://via.placeholder.com/200x300?text=Rei+Leao", overview: "Jovem leão precisa encarar seu destino após a perda de seu pai." },
  { id: 48, title: "Como Treinar o Seu Dragão", genre: "Animação", year: 2010, rating: 8.1, img: "https://via.placeholder.com/200x300?text=Treinar+Dragao", overview: "Jovem viking faz amizade com um dragão temido por seu povo." },
  { id: 49, title: "Viva: A Vida é uma Festa", genre: "Animação", year: 2017, rating: 8.4, img: "https://via.placeholder.com/200x300?text=Viva", overview: "Jovem aspirante a músico entra no Mundo dos Mortos em busca de respostas." },
  { id: 50, title: "Shrek", genre: "Animação", year: 2001, rating: 7.9, img: "https://via.placeholder.com/200x300?text=Shrek", overview: "Ogro aceita resgatar uma princesa para recuperar seu pântano." },
  { id: 51, title: "Meu Malvado Favorito", genre: "Animação", year: 2010, rating: 7.6, img: "https://via.placeholder.com/200x300?text=Malvado+Favorito", overview: "Vilão adota três meninas orfãs como parte de um plano megalomaníaco." },
  { id: 52, title: "Ratatouille", genre: "Animação", year: 2007, rating: 8.1, img: "https://via.placeholder.com/200x300?text=Ratatouille", overview: "Rato com talento para culinária faz aliança com jovem cozinheiro em Paris." }
];

// Estado da Aplicação
let favorites = [];
let currentFilter = 'todos';

// Elementos DOM
const moviesGrid = document.getElementById('moviesGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const genreBtns = document.querySelectorAll('.genre-btn');
const favCountEl = document.getElementById('favCount');
const showTrendingBtn = document.getElementById('showTrendingBtn');
const showFavoritesBtn = document.getElementById('showFavoritesBtn');
const sectionTitle = document.getElementById('sectionTitle');
const modal = document.getElementById('movieModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

// Renderiza a lista de filmes recebida
function renderMovies(movies) {
  moviesGrid.innerHTML = '';
  
  if (movies.length === 0) {
    moviesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Nenhum filme encontrado.</p>';
    return;
  }

  movies.forEach(movie => {
    const isFav = favorites.includes(movie.id);
    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.innerHTML = `
      <i class="fas fa-heart fav-icon ${isFav ? 'active' : ''}" onclick="toggleFavorite(event, ${movie.id})"></i>
      <img src="${movie.img}" alt="${movie.title}">
      <div class="movie-info">
        <div class="movie-title">${movie.title}</div>
        <div class="movie-meta">
          <span>${movie.year}</span>
          <span><i class="fas fa-star" style="color:#f39c12"></i> ${movie.rating}</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openModal(movie));
    moviesGrid.appendChild(card);
  });
}

// Favoritos
function toggleFavorite(event, id) {
  event.stopPropagation();
  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
  } else {
    favorites.push(id);
  }
  favCountEl.textContent = favorites.length;
  applyFilters();
}

// Filtros de Gênero e Busca
function applyFilters() {
  const query = searchInput.value.toLowerCase();
  
  let filtered = moviesData.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(query);
    const matchesGenre = currentFilter === 'todos' || movie.genre === currentFilter;
    return matchesSearch && matchesGenre;
  });

  renderMovies(filtered);
}

// Event Listeners
genreBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    genreBtns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.dataset.genre;
    applyFilters();
  });
});

searchBtn.addEventListener('click', applyFilters);
searchInput.addEventListener('keyup', applyFilters);

showTrendingBtn.addEventListener('click', () => {
  showTrendingBtn.classList.add('active');
  showFavoritesBtn.classList.remove('active');
  sectionTitle.textContent = "Filmes em Alta";
  currentFilter = 'todos';
  applyFilters();
});

showFavoritesBtn.addEventListener('click', () => {
  showFavoritesBtn.classList.add('active');
  showTrendingBtn.classList.remove('active');
  sectionTitle.textContent = "Meus Favoritos";
  
  const favMovies = moviesData.filter(m => favorites.includes(m.id));
  renderMovies(favMovies);
});

// Modal
function openModal(movie) {
  modal
