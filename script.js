document.addEventListener("DOMContentLoaded", () => {
  const movieCards = document.querySelectorAll(".movie-card");
  const favCountEl = document.getElementById("favCount");
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const genreBtns = document.querySelectorAll(".genre-btn");
  const showTrendingBtn = document.getElementById("showTrendingBtn");
  const showFavoritesBtn = document.getElementById("showFavoritesBtn");
  const sectionTitle = document.getElementById("sectionTitle");

  const modal = document.getElementById("movieModal");
  const modalBody = document.getElementById("modalBody");
  const closeModal = document.getElementById("closeModal");

  let favorites = JSON.parse(localStorage.getItem("cine_favorites")) || [];
  let currentFilter = "todos";
  let viewingFavoritesOnly = false;

  // Atualizar contador de favoritos
  function updateFavCount() {
    favCountEl.textContent = favorites.length;
    localStorage.setItem("cine_favorites", JSON.stringify(favorites));
  }

  // Marcar ícones já salvos como ativos na inicialização
  movieCards.forEach(card => {
    const id = card.dataset.id;
    const favIcon = card.querySelector(".fav-icon");
    if (favorites.includes(id)) {
      favIcon.classList.add("active");
    }

    // Evento de Favoritar
    favIcon.addEventListener("click", (e) => {
      e.stopPropagation(); // Evita abrir o modal ao favoritar
      if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
        favIcon.classList.remove("active");
      } else {
        favorites.push(id);
        favIcon.classList.add("active");
      }
      updateFavCount();

      if (viewingFavoritesOnly) {
        filterMovies();
      }
    });

    // Evento de Abrir Modal
    card.addEventListener("click", () => {
      const title = card.dataset.title;
      const genre = card.dataset.genre;
      const year = card.dataset.year;
      const rating = card.dataset.rating;
      const overview = card.dataset.overview;
      const imgSrc = card.querySelector("img").src;

      modalBody.innerHTML = `
        <img src="${imgSrc}" alt="${title}">
        <div class="modal-details">
          <h3>${title}</h3>
          <p><strong>Ano:</strong> ${year} | <strong>Gênero:</strong> ${genre}</p>
          <p><strong>Avaliação:</strong> ⭐ ${rating}/10</p>
          <p style="margin-top: 1rem;">${overview}</p>
        </div>
      `;
      modal.classList.remove("hidden");
    });
  });

  // Fechar Modal
  closeModal.addEventListener("click", () => modal.classList.add("hidden"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });

  // Função para filtrar filmes
  function filterMovies() {
    const query = searchInput.value.toLowerCase().trim();

    movieCards.forEach(card => {
      const cardTitle = card.dataset.title.toLowerCase();
      const cardGenre = card.dataset.genre;
      const cardId = card.dataset.id;

      const matchesGenre = currentFilter === "todos" || cardGenre === currentFilter;
      const matchesSearch = cardTitle.includes(query);
      const matchesFavorites = !viewingFavoritesOnly || favorites.includes(cardId);

      if (matchesGenre && matchesSearch && matchesFavorites) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Filtro de Gêneros
  genreBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      genreBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.genre;
      filterMovies();
    });
  });

  // Pesquisa por Texto
  searchInput.addEventListener("input", filterMovies);
  searchBtn.addEventListener("click", filterMovies);

  // Alternar "Em Alta" e "Favoritos"
  showTrendingBtn.addEventListener("click", () => {
    showTrendingBtn.classList.add("active");
    showFavoritesBtn.classList.remove("active");
    viewingFavoritesOnly = false;
    sectionTitle.textContent = "Filmes em Alta";
    filterMovies();
  });

  showFavoritesBtn.addEventListener("click", () => {
    showFavoritesBtn.classList.add("active");
    showTrendingBtn.classList.remove("active");
    viewingFavoritesOnly = true;
    sectionTitle.textContent = "Meus Favoritos";
    filterMovies();
  });

  updateFavCount();
});
