import { elements } from './base';
// /movie/${movie.id}?language=en-US
export const showResult = movie => {
  const markup = `
    <li class="carousel-item">
      <a class="movie-link" href="?#${movie.id}">
        <figure class="img-result">
          <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
        </figure>
      </a>
    </li>
  `;
  elements.movieResultList.insertAdjacentHTML('beforeend', markup);
}

export const showResults = movies => {
  movies.forEach(showResult)
}

export const topResult = movie => {
  const markup = `
    <li class="carousel-item">
      <a class="movie-link" href="#${movie.id}">
        <figure class="img-result">
          <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
        </figure>
      </a>
    </li>
  `;
  elements.topResultList.insertAdjacentHTML('beforeend', markup);
}

export const topResults = movies => {
  movies.forEach(topResult)
}

// <h3 class="movie-title">${movie.title}</h3>