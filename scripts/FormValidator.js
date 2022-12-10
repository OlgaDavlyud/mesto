import { selectors } from "./constants.js";

export default class FormValidator {
  constructor (selectors, form) {
    this._selectors = selectors;
    this._form = form;
  }

  _showInputError () {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error-visible`);

    this._inputElement.classList.add(selectors.errorClass);
    errorElement.textContent = errorMessage;
    this._inputElement.classList.add(selectors.inputErrorClass);
  }

  _hideInputError () {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error-visible`);

    this._inputElement.classList.remove(selectors.errorClass);
    this._inputElement.classList.remove(selectors.inputErrorClass);
    errorElement.textContent = "";
  }

  _hideInputErrorOpeningPopup () {
      const formList = Array.from(document.querySelectorAll(selectors.formSelector));

      formList.forEach(formElement => {
        const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));

        inputList.forEach(inputElement => {
          this._hideInputError(formElement, inputElement);
        });
      });
    };

  _checkInputValidity () {
    const isValid = this._inputElement.validity.valid;

    if (!isValid) {
       this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _toggleButtonState () {
    const hasInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);

    if (hasInvalidInput) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(selectors.inactiveButtonClass);
    } else {
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove(selectors.inactiveButtonClass);
    }
  }

  _disabledButtonState () {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(selectors.inactiveButtonClass);
  }

  _setEventListenersForm () {
    formElement.addEventListener('submit', (event) =>{
      event.preventDefault();
    });

    const inputList = Array.from(formElement.querySelectorAll(this._selectors.inputSelector));
    const submitButton = formElement.querySelector(this._selectors.submitButtonSelector);

    this._toggleButtonState(inputList, submitButton);

    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, submitButton);
      });
    });
  }

  enableValidation () {
    const formList = Array.from(document.querySelectorAll(selectors.formSelector));

    formList.forEach(formElement => {
      setEventListenersForm(formElement, selectors);
    });
  }
}

// // Функция, которая показывает ошибку
// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error-visible`);

//   inputElement.classList.add(selectors.errorClass);
//   errorElement.textContent = errorMessage;
//   inputElement.classList.add(selectors.inputErrorClass);
// }

// // Функция, которая скрывает ошибку
// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error-visible`);

//   inputElement.classList.remove(selectors.errorClass);
//   inputElement.classList.remove(selectors.inputErrorClass);
//   errorElement.textContent = "";
// }

// //Функция очистки ошибок при открытии попапов
// const hideInputErrorOpeningPopup = (formElement) => {
//   const formList = Array.from(document.querySelectorAll(selectors.formSelector));

//   formList.forEach(formElement => {
//     const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));

//     inputList.forEach(inputElement => {
//       hideInputError(formElement, inputElement);
//     });
//   });
// };

// // Функция, которая проверяет валидность поля
// const checkInputValidity = (formElement, inputElement) => {
  // const isValid = inputElement.validity.valid;

  // if (!isValid) {
  //    showInputError(formElement, inputElement, inputElement.validationMessage);
  // } else {
  //   hideInputError(formElement, inputElement);
  // }
// }

// //Функция, которая отвечает за бокировку кнопки
// const toggleButtonState = (inputList, buttonElement) => {
  // const hasInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);

  // if (hasInvalidInput) {
  //   buttonElement.setAttribute('disabled', true);
  //   buttonElement.classList.add(selectors.inactiveButtonClass);
  // } else {
  //   buttonElement.removeAttribute('disabled');
  //   buttonElement.classList.remove(selectors.inactiveButtonClass);
  // }
// }

// //Функция disabled button submit
// const disabledButtonState = (buttonElement) => {
  // buttonElement.setAttribute('disabled', true);
  // buttonElement.classList.add(selectors.inactiveButtonClass);
// }

// //Функция которая обрабатывает все формы
// const setEventListenersForm = (formElement, selectors) => {
  // formElement.addEventListener('submit', (event) =>{
  //   event.preventDefault();
  // });

  // const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
  // const submitButton = formElement.querySelector(selectors.submitButtonSelector);

  // toggleButtonState(inputList, submitButton);

  // inputList.forEach(inputElement => {
  //   inputElement.addEventListener('input', () => {
  //     checkInputValidity(formElement, inputElement);
  //     toggleButtonState(inputList, submitButton);
  //   });
  // });
// }

// //Функция которая включает валидацию всех форм
// const enableValidation = (selectors) => {
  // const formList = Array.from(document.querySelectorAll(selectors.formSelector));

  // formList.forEach(formElement => {
  //   setEventListenersForm(formElement, selectors);
  // });
// }

// // const selectors = {
// //   formSelector: '.popup__form',
// //   inputSelector: '.popup__input',
// //   submitButtonSelector: '.popup__button-submit',
// //   inactiveButtonClass: 'popup__button-disabled',
// //   inputErrorClass: 'popup__input-type-error',
// //   errorClass: 'popup__error-visible'
// // }