import { carouselButtons } from './carousel';
import Result from './pullData';
import Movie from './pullMovieData';
import * as displayData from './displayData';
import * as viewMovie from './viewMovie';

// Global State of the App
const state = {};

/**
 * MOVIE RESULTS
 */
const controlResult = async () => {
  // Get results first page
  const query = '1';

  if(query && document.URL.includes("index.html")) {
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
 * MOVIE DETAILS
 */
const controlMovie = async () => {
  // Get ID from url
  const id = window.location.hash.replace('#', '');

  if (id) {
    // Prepare the UI for changes

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
  viewMovie.showThatMovie();
};

// window.addEventListener('hashchange', controlMovie);
// window.addEventListener('load', controlMovie);
// ABOVE SAME AS BELOW
 ['hashchange', 'load'].forEach(event => window.addEventListener(event, controlMovie));





















