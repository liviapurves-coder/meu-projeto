let favorites = [];
let currentFilter = 'todos';
let showingFavoritesOnly = false;

// Seletores do DOM
const movieCards = document.querySelectorAll('.movie-card');
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

// Função de Filtro Geral
function applyFilters() {
  const query = searchInput.value.toLowerCase().trim();

  movieCards.forEach(card => {
    const id = card.dataset.id;
    const title = card.dataset.title.toLowerCase();
    const genre = card.dataset.genre;

    const matchesSearch = title.includes(query);
    const matchesGenre = currentFilter === 'todos' || genre === currentFilter;
    const matchesFavorites = !showingFavoritesOnly || favorites.includes(id);

    if (matchesSearch && matchesGenre && matchesFavorites) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// Eventos de Favoritos e Clique no Card
movieCards.forEach(card => {
  const favIcon = card.querySelector('.fav-icon');
  const id = card.dataset.id;

  favIcon.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita abrir o modal ao favoritar
    if (favorites.includes(id)) {
      favorites = favorites.filter(favId => favId !== id);
      favIcon.classList.remove('active');
    } else {
      favorites.push(id);
      favIcon.classList.add('active');
    }
    favCountEl.textContent = favorites.length;
    applyFilters();
  });

  // Abrir Modal
  card.addEventListener('click', () => {
    const title = card.dataset.title;
    const year = card.dataset.year;
    const genre = card.dataset.genre;
    const rating = card.dataset.rating;
    const overview = card.dataset.overview;
    const imgSrc = card.querySelector('img').src;

    modalBody.innerHTML = `
      <img src="${imgSrc}" alt="${title}">
      <div class="modal-details">
        <h2>${title} (${year})</h2>
        <p style="margin-bottom:0.4rem"><strong>Gênero:</strong> ${genre}</p>
        <p style="margin-bottom:0.8rem"><strong>Avaliação:</strong> <i class="fas fa-star" style="color:#f39c12"></i> ${rating}</p>
        <p>${overview}</p>
      </div>
    `;
    modal.classList.remove('hidden');
  });
});

// Filtros por Gênero
genreBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    genreBtns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.dataset.genre;
    applyFilters();
  });
});

// Busca corrigida (Pesquisa em tempo real + Clique no botão)
searchInput.addEventListener('input', applyFilters);
searchBtn.addEventListener('click', applyFilters);

// Alternar abas: Em Alta vs Favoritos
showTrendingBtn.addEventListener('click', () => {
  showingFavoritesOnly = false;
  showTrendingBtn.classList.add('active');
  showFavoritesBtn.classList.remove('active');
  sectionTitle.textContent = 'Filmes em Alta';
  applyFilters();
});

showFavoritesBtn.addEventListener('click', () => {
  showingFavoritesOnly = true;
  showFavoritesBtn.classList.add('active');
  showTrendingBtn.classList.remove('active');
  sectionTitle.textContent = 'Meus Favoritos';
  applyFilters();
});

// Fechar Modal
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});
