const wrap = document.querySelectorAll('.price__item-wrapper');

wrap.forEach((cont) => {
  let more = cont.querySelector('.price__btn');
  let closeBtn = cont.querySelector('.price__btn-close');
  let content = cont.querySelector('.price__item-content');
  let contentList = cont.querySelector('.price__item-list');

  more.addEventListener('click', () => {
    content.classList.remove('price__item-content_active');
    contentList.classList.add('price__item-list_active');
  });

  closeBtn.addEventListener('click', () => {
    contentList.classList.remove('price__item-list_active');
    content.classList.add('price__item-content_active');
  });
});

let offset = 0;
const slider = document.querySelector('.feedback__iner-slider'),
      carusel = document.querySelector('.feedback__iner-carusel');

document.querySelector('.feedback__btn').addEventListener('click', function() {
    offset += 380;
    if (offset > 1140) {
        offset = 0;
    }
    slider.style.left = -offset +'px';
    // if (offset = 0) {
    //   carusel.classList.add('active');
    // }
    // if (offset > 379) {
    //   carusel.classList.remove('active');
    // }
})
