const modalSearch = document.querySelector('[data-js-modal-search]');
const modalSearchOpenButton = document.querySelector('[data-js-modal-search-button-open]');
const modalSearchCloseButton = modalSearch.querySelector('[data-js-modal-search-button-close]');

modalSearchOpenButton.addEventListener('click', () => {
  modalSearch.classList.add('modal-opened');
});

modalSearchCloseButton.addEventListener('click', () => {
  modalSearch.classList.remove('modal-opened');
});
