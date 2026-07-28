// Configurações da API TMDb
const API_KEY = 'SUA_CHAVE_API_AQUI'; // Substitua pela sua chave do TMDb
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

// Elementos do DOM
const moviesGrid = document.getElementById('moviesGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const showTrendingBtn = document.getElementById('showTrendingBtn');
const showFavoritesBtn = document.getElementById('showFavoritesBtn');
const sectionTitle = document.getElementById('sectionTitle');
const favCount = document.getElementById('favCount');
const modal = document.getElementById('movieModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-btn');

// Estado da aplicação
let favorites = JSON.parse(localStorage.getItem('myMovieFavs')) || [];

// Inicialização
updateFavCount();
getTrendingMovies();

// Event Listeners
searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSearch(); });
showTrendingBtn.addEventListener('click', () => {
  setActiveNav(showTrendingBtn);
  sectionTitle.textContent = 'Filmes em Alta';
  getTrendingMovies();
});
showFavoritesBtn.addEventListener('click', () => {
  setActiveNav(showFavoritesBtn);
  sectionTitle.textContent = 'Minha Biblioteca de Favoritos';
  renderFavorites();
});
closeModal.addEventListener('click', () => modal.classList.add('hidden'));

// Alternar abas ativas
function setActiveNav(button) {
  showTrendingBtn.classList.remove('active');
  showFavoritesBtn.classList.remove('active');
  button.classList.add('active');
}

// Buscar Filmes em Alta
async function getTrendingMovies() {
  if (API_KEY === 'SUA_CHAVE_API_AQUI') {
    renderFallbackData(); // Dados de demonstração caso não insira a chave
    return;
  }
  try {
    const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=pt-BR`);
    const data = await res.json();
    renderMovies(data.results);
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
  }
}

// Pesquisar Filme
async function handleSearch() {
  const query = searchInput.value.trim();
  if (!query) return;

  if (API_KEY === 'SUA_CHAVE_API_AQUI') {
    alert('Insira uma chave API válida no script.js para realizar buscas reais.');
    return;
  }

  sectionTitle.textContent = `Resultados para: "${query}"`;
  try {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=pt-BR`);
    const data = await res.json();
    renderMovies(data.results);
  } catch (error) {
    console.error('Erro na busca:', error);
  }
}

// Renderizar Filmes na Tela
function renderMovies(movies) {
  moviesGrid.innerHTML = '';
  if (movies.length === 0) {
    moviesGrid.innerHTML = '<p>Nenhum filme encontrado.</p>';
    return;
  }

  movies.forEach(movie => {
    const isFav = favorites.some(f => f.id === movie.id);
    const poster = movie.poster_path ? `${IMG_URL}${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=Sem+Imagem';
    
    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.innerHTML = `
      <img src="${poster}" alt="${movie.title}">
      <div class="movie-info">
        <div class="movie-title">${movie.title}</div>
        <div class="movie-rating">
          <span><i class="fas fa-star"></i> ${movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}</span>
          <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(event, ${movie.id}, '${escapeQuotes(movie.title)}', '${poster}', ${movie.vote_average})">
            <i class="fas fa-heart"></i>
          </button>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => openModal(movie));
    moviesGrid.appendChild(card);
  });
}

// Gerenciar Favoritos (LocalStorage)
function toggleFavorite(event, id, title, poster, rating) {
  event.stopPropagation(); // Impede de abrir o modal ao clicar no coração
  
  const index = favorites.findIndex(f => f.id === id);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push({ id, title, poster, vote_average: rating });
  }

  localStorage.setItem('myMovieFavs', JSON.stringify(favorites));
  updateFavCount();

  if (showFavoritesBtn.classList.contains('active')) {
    renderFavorites();
  } else {
    // Atualiza a cor do ícone no card atual
    event.currentTarget.classList.toggle('active');
  }
}

function renderFavorites() {
  if (favorites.length === 0) {
    moviesGrid.innerHTML = '<p>Sua biblioteca está vazia. Adicione filmes clicando no ícone de coração!</p>';
    return;
  }
  renderMovies(favorites);
}

function updateFavCount() {
  favCount.textContent = favorites.length;
}

// Modal de Detalhes do Filme
function openModal(movie) {
  modalBody.innerHTML = `
    <h2>${movie.title}</h2>
    <p style="margin: 10px 0; color: #aaa;">Data de Lançamento: ${movie.release_date || 'N/A'}</p>
    <p><strong>Avaliação:</strong> ⭐ ${movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}/10</p>
    <p style="margin-top: 15px; line-height: 1.5;">${movie.overview || 'Sinopse não disponível em português.'}</p>
  `;
  modal.classList.remove('hidden');
}

// Utilitário para evitar erros de aspas em nomes de filmes
function escapeQuotes(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// Dados Exemplo (Fallback para testes sem API Key)
function renderFallbackData() {
  const dummyMovies = [
    { id: 1, title: 'Inception', vote_average: 8.8, poster_path: null, overview: 'Um ladrão que rouba segredos corporativos através do uso da tecnologia de compartilhamento de sonhos.', release_date: '2010-07-16' },
    { id: 2, title: 'Interstellar', vote_average: 8.6, poster_path: null, overview: 'Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.', release_date: '2014-11-07' },
    { id: 3, title: 'The Dark Knight', vote_average: 9.0, poster_path: null, overview: 'Quando a ameaça conhecida como O Coringa surge de seu passado misterioso, ela causa estragos no povo de Gotham.', release_date: '2008-07-18' }
  ];
  renderMovies(dummyMovies);
}
