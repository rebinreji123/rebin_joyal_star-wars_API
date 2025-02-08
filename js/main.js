(() => {
  const characters = document.querySelector("#characters");
  const movieBox = document.querySelector("#movieBox");
  const movieCon = document.querySelector("#movie-con");
  const movieTemplate = document.querySelector("#movieTemplate");
  const baseUrl = "https://swapi.dev/api/people/?format=json";

  function fetchCharacters() {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((response) => {
        const results = response.results;
        const ul = document.createElement("ul");

        results.forEach((character) => {
          const li = document.createElement("li");
          const a = document.createElement("a");
          const img = document.createElement("img");

          a.textContent = character.name;
          a.dataset.movies = character.films;
          img.className = "character-image";

          a.appendChild(img);
          li.appendChild(a);
          ul.appendChild(li);
        });

        characters.appendChild(ul);
        attachEventListeners();
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }

  function attachEventListeners() {
    const links = document.querySelectorAll("#characters li a");
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        links.forEach((l) => l.classList.remove("selected"));
        e.currentTarget.classList.add("selected");
        fetchMovies(e);
      });
    });
  }

  function fetchMovies(e) {
    const filmURLs = e.currentTarget.dataset.movies.split(",");
    movieCon.innerHTML = "";

    filmURLs.forEach((filmUrl) => {
      fetch(filmUrl)
        .then((response) => response.json())
        .then((filmDetail) => {
          const movieElement = createMovieElement(filmDetail);
          movieCon.appendChild(movieElement);
        })
        .catch((error) => {
          console.error("Error fetching film details:", error);
        });
    });
  }

  function createMovieElement(movie) {
    const clonedTemplate = document.importNode(movieTemplate.content, true);
    
    const movieTitle = clonedTemplate.querySelector(".movie-heading");
    movieTitle.textContent = movie["title"];

    const movieImage = clonedTemplate.querySelector(".poster-image");
    movieImage.src = `images/${movie["episode_id"]}.jpg`;
    movieImage.alt = movie.title;

    const movieDescription = clonedTemplate.querySelector(".movie-description");
    movieDescription.innerHTML = movie["opening_crawl"];

    return clonedTemplate;
  }

  fetchCharacters();
})();
