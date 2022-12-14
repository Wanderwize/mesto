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
  deleteButton,
  popupAddSaveButton,
  tagClass,
  popupAvatarButton

} from '../utils/constants.js';

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

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54',
  headers: {
    authorization: '3c1df54f-ccd1-445f-a430-a8f888e610a5',
    'Content-Type': 'application/json'
  }
})



const createNewCard = (data) => {
  const card = new Card(data, '#card__template', ownerId, {
    handleCardClick: () => {
      popupWithImage.open(data)
    },
    deleteCard: () => {
      tempCard = card;
      popupWithOk.open(data)
      tagClass.textContent = 'Сохранить'
    },

    setLike: (data) => {
      api.setLike(data)
        .then((data) => {
          card.setLikeCounter(data)
          card.likeActive()
        })
        .catch((err) => {
          console.log(err);
        })
    },
    deleteLike: (data) => {
      api.deleteLike(data)
        .then((data) => {
          card.setLikeCounter(data)
          card.likeUnactive()
        })
        .catch((err) => {
          console.log(err);
        })
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
    popupWithInfoForm.renderLoading(true)
    api.pushUserInfo(data)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupWithInfoForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupWithInfoForm.renderLoading(true)
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

const popupWithOk = new PopupWithOk('#popup-delete', {

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
      .finally(() => {
        popupWithOk.renderLoading(false)
        popupWithOk.close()
      })



  },
})

popupWithOk.setEventListeners()






const popupAddCard = new PopupWithForm('#popup-add-card', {
  submit: (data) => {
    popupAddCard.renderLoading(true)
    api.pushNewCard(data)
      .then((res) => {
        const card = createNewCard(res);
        defaultCardList.setItem(card);
        popupAddCard.close()
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAddCard.renderLoading(true)
        popupAddCard.close()
      })
  }
})

popupAddCard.setEventListeners()


const popupAvatarForm = new PopupWithForm('#popup-avatar', {
  submit: (data) => {
    popupAvatarForm.renderLoading(true);

    api.setUserAvatar(data)
      .then((res) => {
        userInfo.setUserAvatar(res)
        popupAvatarForm.close()
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAvatarForm.renderLoading(true)
        popupAvatarForm.close()
      })
  }
})

avatarEditBtn.addEventListener('click', () => {
  popupAvatarForm.open()
  popupAvatarButton.textContent = 'Сохранить'
})

popupAvatarForm.setEventListeners()

popupWithInfoForm.setEventListeners()

profileEditButton.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  userNameInput.value = data.name;
  userJobInput.value = data.about;
  popupWithInfoForm.open();
  formUser.cleanError()
  popupAddSaveButton.textContent = 'Сохранить'
})

// deleteButton.addEventListener('click', () => {
//   popupAddSaveButton.textContent = 'Удалить'
// })

popupCardOpenButton.addEventListener('click', () => {
  popupAddCard.open();
  formUser.cleanError()
  formAdd.cleanError()
  formAdd.disableButton()
  tagClass.textContent = 'Сохранить'
});









