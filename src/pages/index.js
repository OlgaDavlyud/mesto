import './index.css';

import Card from '../scripts/components/Card.js';
import { popupEditElement, popupAddElement, popupUpdateAvatar, popupShowCard, popupWithSubmit, popupButtonOpenEditElement, popupButtonOpenAddElement, popupButtonOpenAvatarElement, editForm, newCardForm, UpdateAvatarForm, nameInput, jobInput, nameProfile, jobProfile, avatarProfile, selectors } from '../scripts/utils/constants.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithConfirmation from '../scripts/components/PopupWithConfirmation.js';
import Api from '../scripts/components/Api.js';

// Создание новых классов
const userInfo = new UserInfo({ nameProfile: nameProfile, jobProfile: jobProfile, avatarProfile: avatarProfile });
const popupAdd = new PopupWithForm(popupAddElement, submitAddCard);
const popupEdit = new PopupWithForm(popupEditElement, submitEditProfileForm);
const popupAvatar = new PopupWithForm(popupUpdateAvatar, updateAvatar);
const popupShowImage = new PopupWithImage(popupShowCard);
const popupDeleteCard = new PopupWithConfirmation (popupWithSubmit);

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-57',
  headers: {
    authorization: 'de2e08e4-c231-4ebe-acd8-a48ea50e7d8e',
    'content-type': 'application/json'
  }
});

const cardList = new Section({
  items: [],
  renderer: (item) => {
    renderCard(item)
  },
},
".elements", api
);

let userId;

Promise.all([api.getInitialUserData(), api.getInitialCards()])
.then(([userDataInfo, cards]) => {
  userInfo.setUserInfo(userDataInfo);
  userId = userDataInfo._id;
  cardList.renderItems(cards);
})
.catch((err) => {
  console.log(err);
})

//Функция открытия окна редактирования данных
function openPopupEdit() {
  popupEdit.open();
  popupEdit.setEventListeners();
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.about;
  validityEditForm.resetValidation();
  validityEditForm.disabledButtonState();
}

// Функция отправки данных о себе
function submitEditProfileForm(data) {
  popupEdit.renderLoading(true);
  api.changeUserData(data)
  .then((res) => {
    userInfo.setUserInfo({ name: res.name, about: res.about, avatar: res.avatar })
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => popupEdit.renderLoading(false))
}

// Функция клика по карточке
function handleCardClick (name, link) {
  popupShowImage.open(name, link);
  popupShowImage.setEventListeners();
}

// Функция создания карточки
function createCard (data) {
  const card = new Card(data, '.card-template', handleCardClick, userId, (id) => {
    if (card.isLiked()) {
      api.deleteLike(id)
      .then(res => {
        card.countLikes(res.likes);
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      api.setLike(id)
      .then(res => {
        card.countLikes(res.likes)
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, (id) => {
    popupDeleteCard.open();
    // popupDeleteCard. otherSubmit(() => {
      const cardDelete = api.deleteCard(id)
      .then((res) => {
        popupDeleteCard.close();
        cardDelete.deleteCard(id);
      })
      .catch((err) => {
        console.log(err);
      })
    })
  // })
  return card.generateCard();
}

// Функция отрисовки карточки
function renderCard(data) {
  cardList.addItem(createCard(data));
}

// Функция добавления новой карточки
function submitAddCard(data) {
  popupAdd.renderLoading(true);
  api.addCard(data)
  .then((res) => {
    renderCard(res);
    popupAdd.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => popupAdd.renderLoading(false))
}

// Функция обновления аватара
function updateAvatar(data) {
  popupAvatar.renderLoading(true);
  api.setNewAvatar(data)
  .then((res) => {
    avatarProfile.setUserInfo({ avatar: res.avatar });
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => popupAvatar.renderLoading(false))
}

//Слушатель открытия окна редактирования данных
popupButtonOpenEditElement.addEventListener('click', openPopupEdit);

//Слушатель открытия окна добавления карточек
popupButtonOpenAddElement.addEventListener('click', function() {
  popupAdd.open();
  popupAdd.setEventListeners();
  validityNewForm.resetValidation();
});

//Слушатель открытия окна обновления аватара
popupButtonOpenAvatarElement.addEventListener('click', function() {
  popupAvatar.open();
  popupAvatar.setEventListeners();
  validityUpdateAvatarForm.resetValidation();
  validityUpdateAvatarForm.disabledButtonState();
})

//Валидация форм
const validityEditForm = new FormValidator(selectors, editForm);
validityEditForm.enableValidation();

const validityNewForm = new FormValidator(selectors, newCardForm);
validityNewForm.enableValidation();

const validityUpdateAvatarForm = new FormValidator(selectors, UpdateAvatarForm);
validityUpdateAvatarForm.enableValidation();