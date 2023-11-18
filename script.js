let apiKey = "eeac0fdf65aa968b39356d57f73acf27";
let urlBase = "https://api.themoviedb.org/3/search/movie";
let urlImg = "https://image.tmdb.org/t/p/w200";

document.getElementById("searchButton").addEventListener("click", searchMovies);
let resultado = document.getElementById("results");

function searchMovies() {
	resultado.innerHTML = "cargando...";
	let searchInput = document.getElementById("searchInput").value;

	fetch(`${urlBase}?query=${searchInput}&api_key=${apiKey}`)
		.then((response) => response.json()) //responde = dato
		.then((response) => displayMovies(response.results));
}

function displayMovies(movies) {
	resultado.innerHTML = "";

	if (movies.length === 0) {
		resultado.innerHTML = "<p>Sin resultados</p>";
		return;
	}

	movies.forEach((movie) => {
		let movieDiv = document.createElement("div");
		movieDiv.classList.add("movie");

		let movieTitulo = document.createElement("h2");
		movieTitulo.textContent = movie.title;

		let movieFecha = document.createElement("p");
		movieFecha.textContent = movie.release_date;

		let movieView = document.createElement("p");
		movieView.textContent = movie.overview;

		let poster = urlImg + movie.poster_path;
		let moviePoster = document.createElement("img");
		moviePoster.src = poster;

		movieDiv.appendChild(moviePoster);
		movieDiv.appendChild(movieTitulo);
		movieDiv.appendChild(movieFecha);
		movieDiv.appendChild(movieView);

		resultado.appendChild(movieDiv);
	});
}
