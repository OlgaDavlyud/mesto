// popups
export const popupEditElement = document.querySelector('.popup-edit');
export const popupAddElement = document.querySelector('.popup-add');
export const popupUpdateAvatar = document.querySelector('.popup-update-avatar');
export const popupShowCard = document.querySelector('.popup-show');
export const popupWithSubmit = document.querySelector('.popup-delete');

//popups open buttons
export const popupButtonOpenEditElement = document.querySelector('.profile__edit-button');
export const popupButtonOpenAddElement = document.querySelector('.profile__add-button');
export const popupButtonOpenAvatarElement = document.querySelector('.profile__avatar-button');

// popups контейнеры и формы
export const formEditElement = popupEditElement.querySelector('.popup__container');
export const formUpdateAvatar = popupUpdateAvatar.querySelector('.popup__container-update-avatar');
export const editForm = formEditElement.querySelector('.popup__form');
export const newCardForm = popupAddElement.querySelector('.popup__form');
export const UpdateAvatarForm = popupUpdateAvatar.querySelector('.popup__form');

// popups inputs
export const nameInput = formEditElement.querySelector('.popup__input-profile-name');
export const jobInput = formEditElement.querySelector('.popup__input-profile-about-yourself');
export const avatarInput = formUpdateAvatar.querySelector('.popup__input-update-avatar');

// profile container and elements
export const profileElement = document.querySelector('.profile__info');
export const nameProfile = profileElement.querySelector('.profile__name');
export const jobProfile = profileElement.querySelector('.profile__about-yourself');
export const avatarPrifile = document.querySelector('.profile__avatar');

// переменные для валидации
export const selectors = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-disabled',
    inputErrorClass: 'popup__input-type-error',
    errorClass: 'popup__error-visible'
  }