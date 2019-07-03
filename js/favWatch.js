import { elements } from './base';

export const toggleMenu = () => {
  window.addEventListener('click', e => {
    let click = e.target,
        favoritePage = document.querySelector('.favorite-page'),
        watchPage = document.querySelector('.watch-page');

    if (click.matches('.favorite-page-btn')) {
      watchPage.classList.remove('display');
      favoritePage.classList.add('display');
    }

    if (click.matches('.watch-page-btn')) {
      favoritePage.classList.remove('display');
      watchPage.classList.add('display');
    }

  });
}

export const toggleFavButton = isFavorite => {
  const iconString = isFavorite ? 'icon-heart' : 'icon-heart-outlined'; 

  document.querySelector('.movie-like use').setAttribute('href', `img/icons.svg#${iconString}`);

};

export const buildFavoritesMenu = numFavorites => {
  
}

export default class Favorites {
   constructor() {
     this.favorites = [];
   }

   addFavorite(id, title, img) {
      const favorite = {id, title, img};
      this.favorites.push(favorite);

      // Persist Data in Local Storage
      this.persistData();

      return favorite;
   }

   deleteFavorite(id) {
      const index = this.favorites.findIndex(el => el.id = id);
      this.favorites.splice(index, 1);

      // Persist Data in Local Storage
      this.persistData();
   }

   isFavorite(id) {
     return this.favorites.findIndex(el => el.id === id) !== -1;
   }

   getNumFavorites() {
     return this.favorites.length;
   }

   persistData () {
     localStorage.setItem('favorites', JSON.stringify(this.favorites));
   }

   readStorage() {
     const storage = JSON.parse(localStorage.getItem('favorites'));

    //  Restoring favorites from the localStorage
     if (storage) this.favorites = storage;
   }
}

// export default class Watchlist {
//   constructor() {
//     this.watchlist = [];
//   }
// }

// export const toggleLikeBtn = isLiked => {

// };






























