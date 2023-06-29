const contenedor = document.querySelector('#contenedor');
const formcontainer = document.querySelector('#form-container');
const container = document.querySelector('#container');
const header = document.querySelector('#header');
const containerheader = document.querySelector('#form-container__header');
const socialIconsA = document.querySelector('a');
const socialIcons = document.querySelector('#form-container__social-icons');
const content = document.querySelector('#form-container__content');
const socialIconsI = document.querySelector('i');
const container__input = document.querySelector('#form-container__input');
const container__input2 = document.querySelector('#form-container__input2');
const container__forgotPassword = document.querySelector('#form-container__forgot-password');
const container__button = document.querySelector('#form-container__button');
const overlayContainer = document.querySelector('#overlay-container');
const overlay = document.querySelector('#overlay');
const overlayPanel = document.querySelector('#overlay-panel');
const panel__right = document.querySelector('#overlay-panel--right');
const panel__header = document.querySelector('#overlay-panel__header');
const panel__description = document.querySelector('#overlay-panel__description');
const containerText = document.querySelector('#form-container__text');
    
function cambiarEstilo() {
    contenedor.classList.add('contenedor');
    container.classList.add('container');
    formcontainer.classList.add('form-container');
    containerheader.classList.add('form-container__header');
    header.classList.add('header');
    socialIcons.classList.add('form-container__social-icons');
    socialIconsA.classList.add('a');
    socialIconsI.classList.add('i');
    content.classList.add('form-container__content');
    containerText.classList.add('form-container__text');
    container__input.classList.add('form-container__input');
    container__input2.classList.add('form-container__input');
    container__forgotPassword.classList.add('form-container__forgot-password');
    container__button.classList.add('form-container__button');
    overlayContainer.classList.add('overlay-container');
    overlay.classList.add('overlay');
    overlayPanel.classList.add('overlay-panel');
    panel__right.classList.add('overlay-panel--right');
    panel__header.classList.add('overlay-panel__header');
    panel__description.classList.add('overlay-panel__description');
}
    
