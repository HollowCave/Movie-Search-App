import axios from 'axios';
import { key } from './config';

export default class Movie {
  constructor(id) {
    this.id =id;
  }

  async getMovie() {
    try {
      const res = await axios(`https://api.themoviedb.org/3/movie/${this.id}?api_key=${key}&language=en-US`);
        this.title = res.data.title;
        this.description = res.data.overview;
        this.poster = res.data.backdrop_path;
        this.runtime = res.data.runtime;
    } catch (error) {
      (error);
    }
  }
}