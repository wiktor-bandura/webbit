const burgerButton = document.querySelector('.navigation__mobile-button');
const navigationWrapper = document.querySelector('.navigation__wrapper');

burgerButton.addEventListener('click', () => {
   navigationWrapper.classList.add('slideInMenu');

   const closeButton = document.querySelector('.navigation__mobile-close-button');
   closeButton.addEventListener('click', () => {
      navigationWrapper.classList.remove('slideInMenu');
   });
});
