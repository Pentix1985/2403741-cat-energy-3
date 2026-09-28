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

function initApp() {
  initSlider();
}

initApp();
