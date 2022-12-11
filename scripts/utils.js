import { popupEditElement, nameInput, jobInput, nameProfile, jobProfile } from './constants.js';

//Функции open popup
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keyup', closePopupByClickOnEsc);
}

//Функции close popup
export const closePopup = function (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', closePopupByClickOnEsc);
}

//Функция редактирования имени
export function changeName() {
    if (nameInput.value !== nameProfile.value) {
        nameProfile.textContent = nameInput.value;
    }
}

//Функция редактирования описания о себе
export function changeAboutYourself() {
    if (jobInput.value !== jobProfile.value) {
        jobProfile.textContent = jobInput.value;
    }
}

//Функция отправки данных о себе
export function submitEditProfileForm(evt) {
    evt.preventDefault();
    changeName();
    changeAboutYourself();
    closePopup(popupEditElement);
}

//Функция закрытия overlay
export const closePopupByClickOnOverlay = (event) => {
    const popupElement = Array.from(document.querySelectorAll('.popup'));

    popupElement.forEach(popupElement => {
      if (event.target === event.currentTarget) {
        closePopup(popupElement);
       };
    });
}

//Функция закрытия Esc
export const closePopupByClickOnEsc = (event) => {
    if (event.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
}