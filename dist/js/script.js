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

