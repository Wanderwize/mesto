import './styles/index.css';

import { FormValidator } from './scripts/FormValidator.js';
import { Card } from './scripts/Card.js';
import { PopupWithImage } from './scripts/PopupWithImage.js';
import { PopupWithForm } from './scripts/PopupWithForm.js';
import { UserInfo } from './scripts/UserInfo.js';

import {
  popupWithImageSelector,
  initialCards,
  validationObject,
  cardListSelector,
  popupFormUser, popupFormAdd,
  popupCardOpenButton,
  profileEditButton,
  userJobInput,
  userNameInput,
  popupCard,
  popupEditProfile,
  profileSelector

} from './scripts/constants.js';

import { Section } from './scripts/Section.js'

const formUser = new FormValidator(validationObject, popupFormAdd)
const validationUserForm = formUser.enableValidation()

const formAdd = new FormValidator(validationObject, popupFormUser)
const validationAddForm = formAdd.enableValidation()

const popupWithImage = new PopupWithImage(popupWithImageSelector);
popupWithImage.setEventListeners();



const createNewCard = (item) => {
  const card = new Card(item, '#card__template', () => popupWithImage.open(item))
  return card;
};



const defaultCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = createNewCard(item)
    const cardElement = card.generateCard(document.querySelector('.elements'));
  }
},

  cardListSelector,
);



const popupAddCard = new PopupWithForm(popupCard, {
  submit: (item) => {
    const card = createNewCard(item);
    const cardElement = card.generateCard(document.querySelector('.elements'));
    defaultCardList.setItem(cardElement);
    popupAddCard.close()
  }

})
popupAddCard.setEventListeners()

const userInfo = new UserInfo({ profileSelector });

const popupWithInfoForm = new PopupWithForm(popupEditProfile, {
  submit: (item) => {
    userInfo.setUserInfo(item);
    popupWithInfoForm.close();
  }
})

popupWithInfoForm.setEventListeners()

profileEditButton.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  userNameInput.value = userData.name;
  userJobInput.value = userData.about;
  popupWithInfoForm.open();
})

popupFormAdd.addEventListener('submit', () => {
  popupAddCard
})

popupCardOpenButton.addEventListener('click', () => {
  popupAddCard.open();
});

defaultCardList.renderItems();



