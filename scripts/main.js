export { formAddCard, inputCardName, inputCardLink, popupCard, popupFormAdd, popupFormUser, formElements, inputElement, validationObject };
import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import {openPopup, closePopup} from './utils.js';
import {initialCards} from './constants.js';

const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupCard = document.querySelector('.popup_add-card')
const userNameInput = document.querySelector('.popup__input_name_value');
const userJobInput = document.querySelector('.popup__input_about_value');
const userName = document.querySelector('.profile__info-title');
const userJob = document.querySelector('.profile__info-subtitle');
const profileEditCloseButton = document.querySelector('.popup__close-edit');
const profileEditButton = document.querySelector('.profile__edit-btn');
const formEditProfile = document.querySelector('.popup__container-edit');
const formAddCard = document.querySelector('.popup__container-add');
const popupCardOpenButton = document.querySelector('.profile__add-btn');
const popupAddCloseButton = document.querySelector('.popup__close-card');
const imageCloseButton = document.querySelector('.image-popup__close');
const popupImage = document.querySelector('.image-popup');
const profileEditSaveButton = popupEditProfile.querySelector('.popup__save-btn')
const inputCardName = document.querySelector('.popup__input_place_value');
const inputCardLink = document.querySelector('.popup__input_link_value')
const popupFormAdd = document.querySelector('.popup__form-add');
const popupFormUser = document.querySelector('.popup__form-user');
const formElements = document.querySelector('.popup__form')
const inputElement = document.querySelector('.popup__input')

const validationObject = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-btn",
  inactiveButtonClass: "popup__save-btn_unactive",
  inputErrorClass: "popup__input_type_error",
  likeActivator: "card__like_active"
}

popupAddCloseButton.addEventListener("click", function () {
  closePopup(popupCard)
});

popupCardOpenButton.addEventListener("click", function () {
  openPopup(popupCard)
  document.forms.add.reset()
  document.querySelector('.popup__save-btn').setAttribute("disabled", true);
});

profileEditCloseButton.addEventListener("click", function () {
  closePopup(popupEditProfile)
});

imageCloseButton.addEventListener('click', function () {
  closePopup(popupImage)
});

profileEditButton.addEventListener("click", function () {
  openPopup(popupEditProfile);
  userNameInput.value = userName.textContent;
  userJobInput.value = userJob.textContent;
  profileEditSaveButton.removeAttribute('disabled')
  profileEditSaveButton.classList.remove('popup__save-btn_unactive')
});

const popupAddSaveButton = document.querySelector('.popup__save-button')

formEditProfile.addEventListener("submit", function changeInfo(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userJob.textContent = userJobInput.value;
  closePopup(popupEditProfile);

});


  const formUser = new FormValidator(validationObject, popupFormAdd)
  const validationUserForm = formUser.enableValidation()
  const formAdd = new FormValidator(validationObject, popupFormUser)
  const validationAddForm = formAdd.enableValidation()


initialCards.forEach((item) => {
  renderCard(item.name, item.link, '#card__template')
})

formAddCard.addEventListener('submit', function (evt) {
  evt.preventDefault()
  renderCard(inputCardName.value, inputCardLink.value, '#card__template')
  closePopup(popupCard)
  popupAddSaveButton.setAttribute("disabled", true);
  popupAddSaveButton.classList.add('popup__save-btn_unactive')
})

function renderCard(name, link, templateSelector) {
  const userCard = new Card(name, link, templateSelector)
  const cardElement = userCard.generateCard(document.querySelector('.elements'))
  return cardElement
}


