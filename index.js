
//https://www.omdbapi.com/
//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=e9f54ad  API KEY

let searchedMoviesData = []; // Array to store data from search

function getMovieByName() {
  const searchMovie = document.getElementById('searchbar').value;
  const url = `http://www.omdbapi.com/?s=${searchMovie}&apikey=e9f54ad`;
  fetchMovies(url);
}

function fetchMovies(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      searchedMoviesData = data.Search;
      displayMovies(searchedMoviesData);
    })
    .catch((error) => console.error('Error fetching data:', error));
}

function sortMovies(movies) {
  movies.sort((a, b) => b.Year - a.Year);
  displayMovies(movies);
  console.log(movies);
}

function displayMovies(movies) {
  console.log(movies);
  let moviesContainer = document.querySelector('.movie-list');
  moviesContainer.innerHTML = '';// Clear previous content
  if (movies && movies.length > 0) {
    for (let i = 0; i < movies.length; i++) {
      let listItem = document.createElement('li'); // Create a list item for each movie title
      listItem.className = 'movie-list-item';
      listItem.textContent = `${movies[i].Title} (${movies[i].Year})`;
      moviesContainer.appendChild(listItem);// Append the list item to the movie list
    }
  }
}