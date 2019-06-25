import { carouselButtons } from './carousel';
import Result from './pullData';
import Movie from './pullMovieData';
import * as displayData from './displayData';
import * as viewMovie from './viewMovie';
import { elements } from './base';
import Favorites from './favWatch';

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

  if (id) {
    // Prepare the UI for changes
    viewMovie.showThatMovie();
    viewMovie.clearMovie();
    // Create new movie object
    state.movie = new Movie(id);

    try {
      // Get movie data
    await state.movie.getMovie();
    
    // render movie page
    viewMovie.displayMovie(state.movie);
    viewMovie.displayTopMovie(state.movie);
      
    } catch (error) {
      alert('Error processing movie!');
    }  
  }
  // Show selected(clicked) movie
  
};

// window.addEventListener('hashchange', controlMovie);
// window.addEventListener('load', controlMovie);
// ABOVE SAME AS BELOW
 ['hashchange', 'load'].forEach(event => window.addEventListener(event, controlMovie));

/*
  * FAVORITE RESULTS CONTROLLER
*/
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

    // Add favorite to the UI list
    console.log(state.favorites);

  // User HAS favorited current movie
  } else {
     // Remove like from the state
     state.favorites.deleteFavorite(currentID);

    // Toggle the favorite button

    // Remove favorite from the UI list
    console.log(state.favorites);

  };
};

elements.movie.addEventListener('click', e => {
  // Add to favorites list
  if(e.target.matches('.favorite, .favorite *')) {
    document.getElementById('unfavorited').style.display = 'none';
    document.getElementById('favorited').style.display = 'inline';
    // Favorite controller
    controlFavorite();
  }
});

elements.topMovie.addEventListener('click', e => {
  // Add to favorites list
  if(e.target.matches('.favorite, .favorite *')) {
    document.getElementById('unfavorited2').style.display = 'none';
    document.getElementById('favorited2').style.display = 'inline';
    // Favorite controller
    controlFavorite();
  }
});
















