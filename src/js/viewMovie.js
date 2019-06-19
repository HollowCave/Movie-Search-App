import { elements } from './base';

export const clearMovie = () => {
    elements.movie.innerHTML = '';
    elements.topMovie.innerHTML = '';
}

export const showThatMovie = () => {
  let movieLink = document.querySelector('.carousel1'),
      topMovieLink = document.querySelector('.carousel2');
      

  movieLink.addEventListener('click', (e) => {

      elements.topMovie.classList.remove('show');
      elements.movie.classList.add('show');

      if (elements.movie.matches('.show')) {
        window.setTimeout(() => {
          let movieDetails1 = document.querySelector('.movie-details1');
        
          
          movieDetails1.classList.add('fadeIn');
        }, 100);
      }
  });

  topMovieLink.addEventListener('click', (e) => {

      elements.movie.classList.remove('show');
      elements.topMovie.classList.add('show');

      if (elements.topMovie.matches('.show')) {
        window.setTimeout(() => {
          let movieDetails2 = document.querySelector('.movie-details2');
          
          movieDetails2.classList.add('fadeIn');
        }, 100);
      }
  });
}

export const displayMovie = movie => {
  const markup = `
    <div class="movie-details1">
      <figure class="movie-poster">
        <img src="https://image.tmdb.org/t/p/w300${movie.poster}" alt="${movie.title}">
      </figure>
      <div class="details-wrapper">
        <div class="misc-details">
          <span class="movie-name"><span class="title">Title:</span> ${movie.title}</span>
          <span class="runTime"><span class="title">RunTime:</span> ${movie.runtime}min</span>
          <span class="favorite"><a title="favorite" class="icon-swap"><i id="unfavorited" class="far fa-heart"></i><i id="favorited" class="fas fa-heart"></i></a></span>
          <span class="watchlist"><a title="watchlist" class="icon-swap"><i id="unwatch" class="far fa-eye"></i><i id="watch" class="fas fa-eye"></i></a></span>
        </div>
        <p class="description">
          ${movie.description}
        </p>
      </div> 
    </div>
  `;
  elements.movie.insertAdjacentHTML('afterbegin', markup);
};

export const displayTopMovie = movie => {
  const markup = `
    <div class="movie-details2">
      <figure class="movie-poster">
        <img src="https://image.tmdb.org/t/p/w300${movie.poster}" alt="${movie.title}">
      </figure>
      <div class="details-wrapper">
        <div class="misc-details">
          <span class="movie-name"><span class="title">Title:</span> ${movie.title}</span>
          <span class="runTime"><span class="title">RunTime:</span> ${movie.runtime}min</span>
          <span class="favorite"><a title="favorite" class="icon-swap"><i id="unfavorited" class="far fa-heart"></i><i id="favorited" class="fas fa-heart"></i></a></span>
          <span class="watchlist"><a title="watchlist" class="icon-swap"><i id="unwatch" class="far fa-eye"></i></i><i id="watch" class="fas fa-eye"></i></a></span>
        </div>
        <p class="description">
          ${movie.description}
        </p>
      </div> 
    </div>
  `;
  elements.topMovie.insertAdjacentHTML('afterbegin', markup);
};