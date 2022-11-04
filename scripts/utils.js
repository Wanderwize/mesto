function deleteCard(evt) {
  evt.target.closest('.card').remove()
}

const popupImageOpen = document.querySelector('.image-popup')

function openImage(evt) {
  openPopup(popupImageOpen)
  document.querySelector('.image-popup__window').src = evt.target.closest('.card__image').src
  document.querySelector('.image-popup__window').alt = evt.target.closest('.card__image').alt
  document.querySelector('.image-popup__subtitle').textContent = evt.target.closest('.card__image').alt
};

function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc)
  document.addEventListener('mousedown', escPopupByMouse)
};

function closePopup(item) {
  document.removeEventListener('keydown', closePopupByEsc)
  document.removeEventListener('mousedown', escPopupByMouse)
  item.classList.remove('popup_opened');
};


function escPopupByMouse(evt) {
  if (evt.target.classList.contains('popup_opened') && evt.button == 0) {
    closePopup(evt.target)
    console.log('еще счетчик нажатий')
  }

}

function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup)
    console.log('счетчик нажатий')
  }
}

export { deleteCard, openImage, closePopupByEsc, openPopup, closePopup, popupImageOpen }
