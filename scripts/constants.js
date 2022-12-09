// popups
export const popupEditElement = document.querySelector('.popup-edit');
export const popupAddElement = document.querySelector('.popup-add');
export const popupShowCard = document.querySelector('.popup-show');

//popups open buttons
export const popupButtonOpenEditElement = document.querySelector('.profile__edit-button');
export const popupButtonOpenAddElement = document.querySelector('.profile__add-button');

//popup close buttons
export const popupButtonCloseEditElement = popupEditElement.querySelector('.popup__button-close');
export const popupButtonCloseAddElement = popupAddElement.querySelector('.popup__button-close');
export const popupButtonCloseShowCard = popupShowCard.querySelector('.popup__show-button-close');

// popups контейнеры и формы
export const formEditElement = popupEditElement.querySelector('.popup__container');
export const formAddElement = popupAddElement.querySelector('.popup__container');
export const editForm = formEditElement.querySelector('.popup__form');
export const newCardForm = popupAddElement.querySelector('.popup__form');

// popups inputs
export const nameInput = formEditElement.querySelector('.popup__input-profile-name');
export const jobInput = formEditElement.querySelector('.popup__input-profile-about-yourself');
export const nameCardInput = formAddElement.querySelector('.popup__input-name-card');
export const linkImageInput = formAddElement.querySelector('.popup__input-link-image');

// profile container and elements
export const profileElement = document.querySelector('.profile__info');
export const nameProfile = profileElement.querySelector('.profile__name');
export const jobProfile = profileElement.querySelector('.profile__about-yourself');

// popup submit button
export const submitBottonEdit = popupEditElement.querySelector('.popup__button-submit');
export const submitBottonAdd = popupAddElement.querySelector('.popup__button-submit');
