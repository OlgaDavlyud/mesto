//import { selectors } from "./constants.js";

const selectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputClass: 'popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-disabled',
  inputErrorClass: 'popup__input-type-error',
  errorClass: 'popup__error-visible'
}

export default class FormValidator {
  constructor (selectors, form) {
    this._formSelector = selectors.formSelector;
    this._inputSelector = selectors.inputSelector;
    this._submitButtonSelector = selectors.submitButtonSelector;
    this._inactiveButtonClass = selectors.inactiveButtonClass;
    this._inputErrorClass = selectors.inputErrorClass;
    this._errorClass = selectors.errorClass;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
  }

  _showInputError () {
    console.log(this);
    console.log(this._form);
    console.log(this._inputSelector);
    this._errorElement = this._form.querySelector(`${this._inputSelector.id}-error-visible`);
    console.log(this._errorElement);
    this._inputSelector.classList.add(this._errorClass);
    this._errorElement.textContent = errorMessage;
    this._inputSelector.classList.add(this._inputErrorClass);
  }

  // _hideInputError () {
  //   const errorElement = this._form.querySelector(`.${inputElement.id}-error-visible`);

  //   this._inputElement.classList.remove(selectors.errorClass);
  //   this._inputElement.classList.remove(selectors.inputErrorClass);
  //   errorElement.textContent = "";
  // }

  // _hideInputErrorOpeningPopup () {
  //     const formList = Array.from(document.querySelectorAll(selectors.formSelector));

  //     formList.forEach(formElement => {
  //       const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));

  //       inputList.forEach(inputElement => {
  //         this._hideInputError(formElement, inputElement);
  //       });
  //     });
  //   };

  // _checkInputValidity () {
  //   const isValid = this._inputElement.validity.valid;

  //   if (!isValid) {
  //      this._showInputError(formElement, inputElement, inputElement.validationMessage);
  //   } else {
  //     this._hideInputError(formElement, inputElement);
  //   }
  // }

  // _toggleButtonState () {
  //   const hasInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);

  //   if (hasInvalidInput) {
  //     buttonElement.setAttribute('disabled', true);
  //     buttonElement.classList.add(selectors.inactiveButtonClass);
  //   } else {
  //     buttonElement.removeAttribute('disabled');
  //     buttonElement.classList.remove(selectors.inactiveButtonClass);
  //   }
  // }

  // _disabledButtonState () {
  //   this._buttonElement.setAttribute('disabled', true);
  //   this._buttonElement.classList.add(selectors.inactiveButtonClass);
  // }

  _setEventListenersForm () {
    this._showInputError();
    //this._disabledButtonState ();
    // formElement.addEventListener('submit', (event) =>{
    //   event.preventDefault();
    // });

    // const inputList = Array.from(formElement.querySelectorAll(this._selectors.inputSelector));
    // const submitButton = formElement.querySelector(this._selectors.submitButtonSelector);

    // this._toggleButtonState(inputList, submitButton);

    // inputList.forEach(inputElement => {
    //   inputElement.addEventListener('input', () => {
    //     this._checkInputValidity(formElement, inputElement);
    //     this._toggleButtonState(inputList, submitButton);
    //   });
    // });
  }

  // enableValidation () {
  //   formList.forEach(formElement => {
  //     setEventListenersForm(formElement, selectors);
  //   });
  // }

    enableValidation () {
      this._setEventListenersForm ();
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

// const selectors = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button-submit',
//   inactiveButtonClass: 'popup__button-disabled',
//   inputErrorClass: 'popup__input-type-error',
//   errorClass: 'popup__error-visible'
// }