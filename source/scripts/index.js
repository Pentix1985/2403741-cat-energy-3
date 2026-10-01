/* в этот файл добавляет скрипты*/

function initSlider() {
  const ranger = document.querySelector('.compare-slider__ranger');
  const imgBefore = document.querySelector('.compare-slider__image--before');
  const imgAfter = document.querySelector('.compare-slider__image--after');
  const mixerValue = document.querySelector('.compare-slider__mixer');

  function updateClipPath(value) {
    imgBefore.style.clipPath = `inset(0px ${ 100 - value }% 0px 0px)`;
    imgAfter.style.clipPath = `inset(0px  0px 0px ${ value }%)`;
    ranger.style.left = `calc(${ value }% - 2px)`;
  }

  mixerValue.addEventListener('input', (event) => {
    updateClipPath(event.target.value);
  });
}

function checkJS() {
  const header = document.querySelector('header');
  header.classList.remove('disabled-js');

  const headerNavigation = document.querySelector('.header__navigation');
  headerNavigation.classList.remove('header__navigation--disabled-js');

  const navigation = document.querySelector('.navigation__toggle');
  navigation.classList.remove('navigation__toggle--disabled-js');

  const headerContainer = document.querySelector('.header__container');
  headerContainer.classList.remove('header__container-disabled-js');

  const navigationList = document.querySelector('.navigation__list');
  navigationList.classList.remove('navigation__list-disabled-js');
}

function initApp() {
  checkJS();
  initSlider();
}

initApp();
