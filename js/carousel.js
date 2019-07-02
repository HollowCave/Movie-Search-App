let carousel1 = document.querySelector('.carousel1'),
    carousel2 = document.querySelector('.carousel2'), 
    distToMove = 216,
    current1 = 0,
    current2 = 0;

    // console.log(carousel);


export const carouselButtons = () => {
  document.addEventListener('click', function (event) {

      if (event.target.matches('.right1') && current1 < 3058) {
        current1 += distToMove;
        carousel1.style.transform = `translateX(-${current1}px)`
      } 
  
      if (event.target.matches('.left1') && current1 > 0) {
        current1 -= distToMove;
        carousel1.style.transform = `translateX(-${current1}px)`
      }

      if (event.target.matches('.right2') && current2 < 3058) {
        current2 += distToMove;
        carousel2.style.transform = `translateX(-${current2}px)`
      }
  
      if (event.target.matches('.left2') && current2 > 0) {
        current2 -= distToMove;
        carousel2.style.transform = `translateX(-${current2}px)`
      }
  
  }, false);
}



