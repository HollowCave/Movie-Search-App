import { carouselButtons } from './carousel';
import Result from './pullData';
import Movie from './pullMovieData';
import * as displayData from './displayData';
import * as viewMovie from './viewMovie';
import { elements } from './base';
import Favorites from './favWatch';
import { toggleFavButton, toggleMenu } from './favWatch';

// Global State of the App
const state = {};

/**
 * MOVIE RESULTS CONTROLLER
 */
const controlResult = async () => {
  // Get results first page
  const query = '1';

  if(query) {
    // Get first page and add to state
    state.result = new Result(query);

    try {
      // get results
    await state.result.getResults();

    // Display the results
    displayData.showResults(state.result.result);
    displayData.topResults(state.result.topResults);
    // console.log(state.result.result);
    } catch (error) {
      alert('Somethings wrong has happened!');
    }
  }
}

window.addEventListener('DOMContentLoaded',  () => {
  controlResult();
});


// Carousel Buttons
carouselButtons();


/**
 * MOVIE DETAILS CONTROLLER
 */
const controlMovie = async () => {
  // Get ID from url
  const id = window.location.hash.replace('#', '');

  const pathName = window.location.pathname;
  // console.log(window.location);

  if (id || pathName === '/index.html') {
    // Prepare the UI for changes
    viewMovie.clearMovie();
    viewMovie.showThatMovie();

     // Highlight the selected movie
    //  viewMovie.highlightSelected(id);

    // Create new movie object
    state.movie = new Movie(id);

    try {
      // Get movie data
    await state.movie.getMovie();
    
    // render movie page
    viewMovie.displayMovie(state.movie, state.favorites.isFavorite(id));
    viewMovie.displayTopMovie(state.movie);
      
    } catch (error) {
      console.log(error);
      alert('Error processing movie!');
    }  
  }
  
};

// window.addEventListener('hashchange', controlMovie);
// document.addEventListener('load', controlMovie);
// ABOVE almost SAME AS BELOW
  ['hashchange', 'DOMContentLoaded', 'load'].forEach(event => window.addEventListener(event, controlMovie));

/*
  * FAVORITE RESULTS CONTROLLER
*/
state.favorites = new Favorites();

const controlFavorite = () => {
  if(!state.favorites) state.favorites = new Favorites();
  const currentID = state.movie.id;

  // User has NOT yet favorited current movie
  if(!state.favorites.isFavorite(currentID)) {
    // Add like to the state
    const newFavorite = state.favorites.addFavorite(
      currentID,
      state.movie.title,
      'https://image.tmdb.org/t/p/w300'+state.movie.poster
    );

    // Toggle the favorite button
    toggleFavButton(true);

    // Add favorite to the UI list
    console.log(state.favorites);

  // User HAS favorited current movie
  } else {
     // Remove like from the state
     state.favorites.deleteFavorite(currentID);

    // Toggle the favorite button
    toggleFavButton(false);

    // Remove favorite from the UI list
    console.log(state.favorites);

  };
};

// FavWatch Page
toggleMenu();

// Build favorites and watchlist
window.addEventListener('load', () => {
  state.favorites = new Favorites();

  // Restore favorites
  state.favorites.readStorage();

  // Render Favorites
  // state.favorites.favorites.forEach(favorite => favView.renderFavorites(favorite));
});



// Handle Button CLicks
window.addEventListener('click', e => {
  if (e.target.matches('.movie-like, .movie-like *')) {
    // Favorites controller
    controlFavorite();
  }
});















