export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const validationObject = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-btn",
  inactiveButtonClass: "popup__save-btn_unactive",
  inputErrorClass: "popup__input_type_error",
  likeActivator: "card__like_active"
}

export const cardListSelector = '.elements';
export const popupFormUser = document.querySelector('.popup__form-user');
export const popupFormAdd = document.querySelector('.popup__form-add');
export const popupCardOpenButton = document.querySelector('.profile__add-btn');
export const profileEditButton = document.querySelector('.profile__edit-btn');
export const userNameInput = document.querySelector('.popup__input_name_value');
export const userJobInput = document.querySelector('.popup__input_about_value');
export const profileSelector = document.querySelector('.profile')
export const popupAddSaveButton = document.querySelector('.popup__save-button')
export const infoTitle = document.querySelector('#name')
export const infoSubtitle = document.querySelector('#about')
