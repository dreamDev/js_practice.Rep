(function () {

  const accItems = document.querySelectorAll('.accordion__item');

  accItems.forEach(function (element) {
    element.addEventListener('click', function (e) {

      const itemChild = e.currentTarget.firstElementChild;
      const activeItem = document.querySelector('.accordion__item-title.active');

      if (activeItem && activeItem !== itemChild) {
        activeItem.classList.toggle('active');
        activeItem.nextElementSibling.style.maxHeight = 0;
      }

      itemChild.classList.toggle('active');

      if (itemChild.classList.contains('active')) {
        element.lastElementChild.style.maxHeight = element.lastElementChild.scrollHeight + 'px';
      } else {
        element.lastElementChild.style.maxHeight = 0;
      }

    })
  })

})();