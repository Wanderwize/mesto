import './index.css';

import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/api.js';
import { PopupWithOk } from '../components/PopupWithOk.js';
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
  infoTitle,
  infoSubtitle,
  avatarEditBtn,
  avatarEditPopup,
  popupAvatar,
  avatarImage,
  setLike,
  deleteButton

} from '../components/constants.js';

import { Section } from '../components/Section.js'

let ownerId = null;
let tempCard = null;

const formAdd = new FormValidator(validationObject, popupFormAdd)
formAdd.enableValidation()


const formUser = new FormValidator(validationObject, popupFormUser)
formUser.enableValidation()

const formAvatar = new FormValidator(validationObject, popupAvatar)
formAvatar.enableValidation()

const popupWithImage = new PopupWithImage('#image-popup');
popupWithImage.setEventListeners();

const api = new Api()



const createNewCard = (data) => {
  const card = new Card(data, '#card__template', ownerId, {
    handleCardClick: () => {
      popupWithImage.open(data)
    },
    deleteCard: () => {
      tempCard = card;
      popupWithOk.open(data)
    },

    setLike: (data) => {
      api.setLike(data)
        .then((data) => {
          card.setLikeCounter(data)
        })
        .catch(data => data.status)
    },
    deleteLike: (data) => {
      api.deleteLike(data)
        .then((data) => {
          card.setLikeCounter(data)
        })
        .catch(data => data.status)
    }
  })
  const cardElement = card.createCard();
  return cardElement
};

const defaultCardList = new Section({
  renderer: (data) => {
    const card = createNewCard(data)
    defaultCardList.setItem(card)
  }
},
  cardListSelector,
);

const userInfo = new UserInfo('#name', '#about', avatarImage);

const popupWithInfoForm = new PopupWithForm('.popup_edit-profile', {
  submit: (data) => {
    api.pushUserInfo(data)
      .then((res) => {
        userInfo.setUserInfo(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupWithInfoForm.close();
      })
  }
})

popupWithInfoForm.setEventListeners()

api.getInitialData()
  .then((data) => {
    const [userData, cardsData] = data;
    ownerId = userData._id;
    userInfo.setUserInfo(userData);
    defaultCardList.renderItems(cardsData);
  })
  .catch((err) => {
    console.log(err);
  })

const popupWithOk = new PopupWithOk('.popup__delete', {
  submit: (data) => {
    api.deleteCard(data)
      .then(() => {
        tempCard.deleteCard();
      })
      .then(() => {
        tempCard = null;
        popupWithOk.close();
      })
      .catch((err) => {
        console.log(err);
      })
      evt.preventDefault();
  }
})

popupWithOk.setEventListeners()

const popupAddCard = new PopupWithForm('#popup-add-card', {
  submit: (data) => {
    api.pushNewCard(data)
      .then((res) => {
        const card = createNewCard(res);
        defaultCardList.setItem(card);
        popupAddCard.close()
      })
  }
})

popupAddCard.setEventListeners()


const popupAvatarForm = new PopupWithForm('#popup-avatar', {
  submit: (data) => {
    api.setUserAvatar(data)
      .then((res) => {
        userInfo.setUserAvatar(res)
        popupAvatarForm.close()
      })
      .catch((err) => {
        console.log(err);
      })
  }
})

avatarEditBtn.addEventListener('click', () => {
  popupAvatarForm.open()
})

popupAvatarForm.setEventListeners()

popupWithInfoForm.setEventListeners()

profileEditButton.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  userNameInput.value = data.name;
  userJobInput.value = data.about;
  popupWithInfoForm.open();
  formUser.cleanError()
})

popupCardOpenButton.addEventListener('click', () => {
  popupAddCard.open();
  formUser.cleanError()
  formAdd.cleanError()
  formAdd.disableButton()
});





deleteButton.addEventListener('click', () => {
  popupWithOk.open(data)
  document.querySelector('.popup__delete-btn').removeAttribute("disabled");
  document.querySelector('.popup__delete-btn').remove('popup_opened');
})




defaultCardList.renderItems();





