// Base de dados local com capas reais via Unsplash / Wikimedia
const moviesData = [
  {
    id: 1,
    title: "Interstellar",
    genre: "Ficção Científica",
    rating: 8.6,
    year: 2014,
    poster: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=500&q=80",
    overview: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade."
  },
  {
    id: 2,
    title: "Batman: O Cavaleiro das Trevas",
    genre: "Ação",
    rating: 9.0,
    year: 2008,
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&q=80",
    overview: "Quando a ameaça conhecida como O Coringa surge de seu passado misterioso, ela causa estragos no povo de Gotham."
  },
  {
    id: 3,
    title: "Inception (A Origem)",
    genre: "Ficção Científica",
    rating: 8.8,
    year: 2010,
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80",
    overview: "Um ladrão especializado em invadir os sonhos das pessoas recebe a missão inversa: plantar uma ideia na mente de um herdeiro."
  },
  {
    id: 4,
    title: "Spider-Man: Across the Spider-Verse",
    genre: "Animação",
    rating: 8.7,
    year: 2023,
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&q=80",
    overview: "Miles Morales é catapultado através do Multiverso, onde ele encontra uma equipe de Pessoas-Aranha encarregadas de proteger sua própria existência."
  },
  {
    id: 5,
    title: "O Chefão (The Godfather)",
    genre: "Drama",
    rating: 9.2,
    year: 1972,
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=80",
    overview: "O patriarca idoso de uma dinastia do crime organizado transfere o controle de seu império clandestino para seu filho relutante."
  },
  {
    id: 6,
    title: "Matrix",
    genre: "Ação",
    rating: 8.7,
    year: 1999,
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=80",
    overview: "Um jovem programador é despertado para uma nova realidade e descobre que a vida como conhecemos é apenas uma simulação."
  },
  {
    id: 7,
    title: "O Senhores dos Anéis: O Retorno do Rei",
    genre: "Ação",
    rating: 8.9,
    year: 2003,
    poster: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80",
    overview: "Gandalf e Aragorn lideram o Mundo dos Homens contra o exército de Sauron para desviar a atenção de Frodo e Sam enquanto eles se aproximam da Montanha da Perdição."
  },
  {
    id: 8,
    title: "Divertida Mente 2",
    genre: "Animação",
    rating: 8.5,
    year: 2024,
    poster: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=500&q=80",
    overview: "A mente de Riley passa por uma demolição repentina para dar lugar a algo totalmente inesperado: novas emoções."
  }
];

// Elementos DOM
const moviesGrid = document.getElementById('moviesGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const showTrendingBtn = document.getElementById('showTrendingBtn');
const showFavoritesBtn = document.getElementById('showFavoritesBtn');
const sectionTitle = document.getElementById('sectionTitle');
const favCount = document.getElementById('favCount');
const modal = document.getElementById('movieModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const genreBtns = document.querySelectorAll('.genre-btn');

// Estado
let favorites = JSON.parse(localStorage.getItem('myMovieFavs')) || [];
let currentList = moviesData;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  updateFavCount();
  renderMovies(moviesData);
});

// Eventos de Busca
searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('input', handleSearch);

function handleSearch() {
  const query = searchInput.value.toLowerCase().trim();
  const filtered = currentList.filter(movie => 
    movie.title.toLowerCase().includes(query)
  );
  renderMovies(filtered);
}

// Navegação entre abas
showTrendingBtn.addEventListener('click', () => {
  showTrendingBtn.classList.add('active');
  showFavoritesBtn.classList.remove('active');
  sectionTitle.textContent = 'Filmes em Alta';
  currentList = moviesData;
  renderMovies(currentList);
});

showFavoritesBtn.addEventListener('click', () => {
  showFavoritesBtn.classList.add('active');
  showTrendingBtn.classList.remove('active');
  sectionTitle.textContent = 'Minha Biblioteca de Favoritos';
  currentList = favorites;
  renderMovies(currentList);
});

// Filtro por Gênero
genreBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    genreBtns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');

    const genre = e.target.getAttribute('data-genre');
    if (genre === 'todos') {
      renderMovies(currentList);
    } else {
      const filtered = currentList.filter(m => m.genre === genre);
      renderMovies(filtered);
    }
  });
});

// Renderização dos cards
function renderMovies(movies) {
  moviesGrid.innerHTML = '';
  
  if (movies.length === 0) {
    moviesGrid.innerHTML = '<p style="grid-column: 1/-1; color: #888;">Nenhum filme encontrado.</p>';
    return;
  }

  movies.forEach(movie => {
    const isFav = favorites.some(f => f.id === movie.id);
    
    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
      <div class="movie-info">
        <div class="movie-title">${movie.title}</div>
        <div class="movie-details-row">
          <span class="rating"><i class="fas fa-star"></i> ${movie.rating}</span>
          <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${movie.id}">
            <i class="fas fa-heart"></i>
          </button>
        </div>
      </div>
    `;

    // Evento para abrir Modal
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.fav-btn')) {
        openModal(movie);
      }
    });

    // Evento para Favoritar
    const favBtn = card.querySelector('.fav-btn');
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(movie);
    });

    moviesGrid.appendChild(card);
  });
}

// Favoritar / Desfavoritar
function toggleFavorite(movie) {
  const index = favorites.findIndex(f => f.id === movie.id);
  
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(movie);
  }

  localStorage.setItem('myMovieFavs', JSON.stringify(favorites));
  updateFavCount();

  // Se estivermos na aba de favoritos, re-renderiza a tela atualizada
  if (showFavoritesBtn.classList.contains('active')) {
    renderMovies(favorites);
  } else {
    renderMovies(currentList);
  }
}

function updateFavCount() {
  favCount.textContent = favorites.length;
}

// Controle do Modal
function openModal(movie) {
  modalBody.innerHTML = `
    <div class="modal-body-content">
      <img src="${movie.poster}" alt="${movie.title}">
      <div class="modal-info">
        <h3>${movie.title} (${movie.year})</h3>
        <p><strong>Gênero:</strong> ${movie.genre}</p>
        <p><strong>Avaliação:</strong> ⭐ ${movie.rating} / 10</p>
        <p><strong>Sinopse:</strong> ${movie.overview}</p>
      </div>
    </div>
  `;
  modal.classList.remove('hidden');
}

closeModal.addEventListener('click', () => modal.classList.add('hidden'));
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden');
});
