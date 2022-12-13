//import { selectors } from "./constants.js";

const selectors = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  inputClass: "popup__input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button-disabled",
  inputErrorClass: "popup__input-type-error",
  errorClass: "popup__error-visible",
};

export default class FormValidator {
  constructor(selectors, form) {
    this._form = form;
    this._inputList = Array.from(
      this._form.querySelectorAll(selectors.inputSelector)
    );
    this._submitButton = this._form.querySelector(
      selectors.submitButtonSelector
    );
  }

  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(
      `.${inputElement.id}-error-visible`
    );

    inputElement.classList.add(selectors.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(selectors.inputErrorClass);
  }

  _hideInputError (inputElement) {
    const errorElement = this._form.querySelector(
      `.${inputElement.id}-error-visible`
    );

    inputElement.classList.remove(selectors.errorClass);
    inputElement.classList.remove(selectors.inputErrorClass);
    errorElement.textContent = "";
  };

  hideInputErrorOpeningPopup() {

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  _checkInputValidity(inputElement) {
    const isValid = inputElement.validity.valid;

    if (!isValid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

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

  _setEventListenersForm() {
    // this._disabledButtonState ();
    // formElement.addEventListener('submit', (event) =>{
    //   event.preventDefault();
    // });

    // const submitButton = formElement.querySelector(this._selectors.submitButtonSelector);

    // this._toggleButtonState(inputList, submitButton);

    console.log(this._inputList);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        console.log("add ev");
        this._checkInputValidity(inputElement);
        // this._toggleButtonState(inputList, submitButton);
      });
    });
  }

  // enableValidation () {
  //   formList.forEach(formElement => {
  //     setEventListenersForm(formElement, selectors);
  //   });
  // }

  enableValidation() {
    this._setEventListenersForm();
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
