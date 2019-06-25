import axios from 'axios';
import { key } from './config';

export default class Result {
  constructor(query) {
    this.query = query;
  }

  async getResults() {

    try {
      const res = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${this.query}`);
      const topRes = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${this.query}`);
      this.result = res.data.results; 
      this.topResults= topRes.data.results;
      // console.log(this.result);
  
    } catch (error) {
      alert(error);
    }
  }
}
