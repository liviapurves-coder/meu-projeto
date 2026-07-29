let favorites = [];
let currentFilter = 'todos';
let showingFavoritesOnly = false;

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

// Filtra os cards HTML existentes no DOM
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

// Favoritar filme
movieCards.forEach(card => {
  const favIcon = card.querySelector('.fav-icon');
  const id = card.dataset.id;

  favIcon.addEventListener('click', (e) => {
    e.stopPropagation();
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

    modalBody.innerHTML = `
      <h2>${title} (${year})</h2>
      <p style="margin-top:0.5rem"><strong>Gênero:</strong> ${genre}</p>
      <p style="margin-top:0.3rem"><strong>Avaliação:</strong> <i class="fas fa-star" style="color:#f39c12"></i> ${rating}</p>
      <br>
      <p>${overview}</p>
    `;
    modal.classList.remove('hidden');
  });
});

// Botões de Gênero
genreBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    genreBtns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.dataset.genre;
    applyFilters();
  });
});

// Busca
searchBtn.addEventListener('click
