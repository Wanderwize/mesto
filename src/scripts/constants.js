
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

export const popupEditProfile = document.querySelector('.popup_edit-profile');
export const popupCard = document.querySelector('.popup_add-card')
export const popupInfo = document.querySelector('.popup__title')
export const userNameInput = document.querySelector('.popup__input_name_value');
export const userJobInput = document.querySelector('.popup__input_about_value');
export const userName = document.querySelector('.profile__info-title');
export const userJob = document.querySelector('.profile__info-subtitle');
export const profileEditCloseButton = document.querySelector('.popup__close-edit');
export const popupCloseButton = document.querySelector('.popup__close');
export const profileEditButton = document.querySelector('.profile__edit-btn');
export const formEditProfile = document.querySelector('.popup__container-edit');
export const formAddCard = document.querySelector('.popup__container-add');
export const popupCardOpenButton = document.querySelector('.profile__add-btn');
export const popupAddCloseButton = document.querySelector('.popup__close-card');
export const imageCloseButton = document.querySelector('.image-popup__close');
export const popupImage = document.querySelector('.image-popup');
export const profileEditSaveButton = popupEditProfile.querySelector('.popup__save-btn')
export const inputCardName = document.querySelector('.popup__input_place_value');
export const inputCardLink = document.querySelector('.popup__input_link_value')
export const popupFormAdd = document.querySelector('.popup__form-add');
export const popupFormUser = document.querySelector('.popup__form-user');
export const formElements = document.querySelector('.popup__form')
export const inputElement = document.querySelector('.popup__input')
export const cardList = document.querySelector('.elements')
export const cardListSelector = '.elements';
export const popupWithImageSelector = document.querySelector('.image-popup')
export const titleSelector = document.querySelector('.profile__info-title')
export const subtitleSelector = document.querySelector('.profile__info-subtitle')
export const profileSelector = document.querySelector('.profile')
