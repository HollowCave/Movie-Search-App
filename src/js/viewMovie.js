import { elements } from './base';

export const clearMovie = () => {
  elements.movie.innerHTML = '';
  elements.topMovie.innerHTML = '';
}

export const showThatMovie = () => {
  let hiddenContent = document.querySelector('.hidden-content'),
      hiddenContent2 = document.querySelector('.hidden-content2'),
      movieLink = document.querySelector('.carousel1'),
      topMovieLink = document.querySelector('.carousel2');

  movieLink.addEventListener('click', () => {
      hiddenContent2.classList.remove('show');
      hiddenContent.classList.add('show');
  });

  topMovieLink.addEventListener('click', () => {
      hiddenContent.classList.remove('show');
      hiddenContent2.classList.add('show');
  });
}

export const displayMovie = movie => {
  const markup = `
    <div class="movie-details">
      <figure class="movie-poster">
        <img src="https://image.tmdb.org/t/p/w300${movie.poster}" alt="${movie.title}">
      </figure>
      <div class="details-wrapper">
        <div class="misc-details">
          <span class="movie-name"><span class="title">Title:</span> ${movie.title}</span>
          <span class="runTime"><span class="title">RunTime:</span> ${movie.runtime}</span>
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
    <div class="movie-details">
      <figure class="movie-poster">
        <img src="https://image.tmdb.org/t/p/w300${movie.poster}" alt="${movie.title}">
      </figure>
      <div class="details-wrapper">
        <div class="misc-details">
          <span class="movie-name"><span class="title">Title:</span> ${movie.title}</span>
          <span class="runTime"><span class="title">RunTime:</span> ${movie.runtime}</span>
        </div>
        <p class="description">
          ${movie.description}
        </p>
      </div> 
    </div>
  `;
  elements.topMovie.insertAdjacentHTML('afterbegin', markup);
};