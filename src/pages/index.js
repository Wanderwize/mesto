import './index.css';

import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

import {
  initialCards,
  validationObject,
  cardListSelector,
  popupFormUser,
  popupFormAdd,
  popupCardOpenButton,
  profileEditButton,
  userJobInput,
  userNameInput,
  profileSelector,
  popupAddSaveButton,


} from '../components/constants.js';

import { Section } from '../components/Section.js'

const formAdd = new FormValidator(validationObject, popupFormAdd)
formAdd.enableValidation()

const formUser = new FormValidator(validationObject, popupFormUser)
formUser.enableValidation()

const popupWithImage = new PopupWithImage('#image-popup');
popupWithImage.setEventListeners();

const createNewCard = (item) => {
  const card = new Card(item, '#card__template', () => popupWithImage.open(item))
  const cardElement = card.createCard();
  return cardElement
};

const defaultCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = createNewCard(item)
    defaultCardList.setItem(card)
}
},

  cardListSelector,
);

const popupAddCard = new PopupWithForm('#popup-add-card', {
  submit: (item) => {
    const card = createNewCard(item);
    defaultCardList.setItem(card);
    popupAddCard.close()
  }
})
popupAddCard.setEventListeners()

const userInfo = new UserInfo(profileSelector);

const popupWithInfoForm = new PopupWithForm('.popup_edit-profile', {
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
  formUser.cleanError()
})

popupCardOpenButton.addEventListener('click', () => {
  popupAddCard.open();
  formUser.cleanError()
  popupAddSaveButton.setAttribute("disabled", true);
  popupAddSaveButton.classList.add('popup__save-btn_unactive')
  formAdd.cleanError()
});

defaultCardList.renderItems();



