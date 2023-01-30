import './index.css';

import Card from '../components/Card.js';
import { popupButtonOpenEditElement, popupButtonOpenAddElement, popupButtonOpenAvatarElement, formEditUserData, newCardForm, formAvatars, nameInput, jobInput, nameProfile, jobProfile, avatarProfile, selectors } from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Api from '../components/Api.js';

// Создание новых классов
const userInfo = new UserInfo({ nameProfile: nameProfile, jobProfile: jobProfile, avatarProfile: avatarProfile });
const popupAdd = new PopupWithForm('.popup-add', submitAddCard);
const popupEdit = new PopupWithForm('.popup-edit', submitEditProfileForm);
const popupAvatar = new PopupWithForm('.popup-update-avatar', updateAvatar);
const popupShowImage = new PopupWithImage('.popup-show');
const popupDeleteCard = new PopupWithConfirmation ('.popup-delete');

popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupAvatar.setEventListeners();
popupShowImage.setEventListeners();
popupDeleteCard.setEventListeners();

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

let userId

Promise.all([api.getInitialUserData(), api.getInitialCards()])
.then(([userDataInfo, cards]) => {
  userInfo.setUserInfo(userDataInfo);
  userInfo.setUserAvatar(userDataInfo);
  userId = userDataInfo._id;
  cardList.renderItems(cards);
})
.catch((err) => {
  console.log(err);
})

//Функция открытия окна редактирования данных
function openPopupEdit() {
  popupEdit.open();
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
    userInfo.setUserInfo({ name: res.name, about: res.about })
    popupEdit.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => popupEdit.renderLoading(false))
}

// Функция клика по карточке
function handleCardClick (name, link) {
  popupShowImage.open(name, link);
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
    popupDeleteCard.setSubmitAction(() => {
      api.deleteCard(id)
      .then((res) => {
        console.log(res);
        popupDeleteCard.close();
        card.deleteСard();
      })
      .catch((err) => {
        console.log(err);
      })
    })
  })
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
    console.log(res);
    userInfo.setUserAvatar({ avatar: data.avatar });
    popupAvatar.close();
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
  validityNewForm.resetValidation();
});

//Слушатель открытия окна обновления аватара
popupButtonOpenAvatarElement.addEventListener('click', function() {
  popupAvatar.open();
  validityUpdateAvatarForm.resetValidation();
})

//Валидация форм
const validityEditForm = new FormValidator(selectors, formEditUserData);
validityEditForm.enableValidation();

const validityNewForm = new FormValidator(selectors, newCardForm);
validityNewForm.enableValidation();

const validityUpdateAvatarForm = new FormValidator(selectors, formAvatars);
validityUpdateAvatarForm.enableValidation();