import { elements } from './base';

export default class Favorites {
   constructor() {
     this.favorites = [];
   }

   addFavorite(id, title, img) {
      const favorite = {id, title, img};
      this.favorites.push(favorite);
      return favorite;
   }

   deleteFavorite(id) {
      const index = this.favorites.findIndex(el => el.id = id);
      this.favorites.splice(index, 1);
   }

   isFavorite(id) {
     return this.favorites.findIndex(el => el.id === id) !== -1;
   }

   getNumFavorites() {
     return this.likes.length;
   }
}

// export default class Watchlist {
//   constructor() {
//     this.watchlist = [];
//   }
// }

// export const toggleLikeBtn = isLiked => {

// };






























