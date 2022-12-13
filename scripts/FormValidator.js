import { selectors } from "./constants.js";

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

  // Функция, которая показывает ошибку
  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error-visible`);

    inputElement.classList.add(selectors.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(selectors.inputErrorClass);
  }

  // Функция, которая скрывает ошибку
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error-visible`);

    inputElement.classList.remove(selectors.errorClass);
    inputElement.classList.remove(selectors.inputErrorClass);
    errorElement.textContent = "";
  };

  //Функция очистки ошибок при открытии попапов
  hideInputErrorOpeningPopup() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  // Функция, которая проверяет валидность поля
  _checkInputValidity(inputElement) {
    const isValid = inputElement.validity.valid;

    if (!isValid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  //Функция, которая отвечает за бокировку кнопки
  _toggleButtonState(buttonElement) {
    const hasInvalidInput = this._inputList.some(inputElement => !inputElement.validity.valid);

    if (hasInvalidInput) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(selectors.inactiveButtonClass);
    } else {
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove(selectors.inactiveButtonClass);
    }
  }

  //Функция disabled button submit
  disabledButtonState(buttonElement) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(selectors.inactiveButtonClass);
  }

  //Функция которая обрабатывает все формы
  _setEventListenersForm() {
    this._form.addEventListener('submit', (event) =>{
      event.preventDefault();
    });

    const submitButton = this._form.querySelector(selectors.submitButtonSelector);

    this._toggleButtonState(submitButton);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(submitButton);
      });
    });
  }

  //Функция которая включает валидацию всех форм
  enableValidation() {
    this._setEventListenersForm();
  }
}