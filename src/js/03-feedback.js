import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
/*const email = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');*/
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

form.addEventListener('submit', onFormSubmit);
//email.addEventListener('input', onInput);
form.addEventListener('input', throttle(onFormInput, 500));

/*onOutput();

/*function onInput(ev) {
  const mail = ev.target.value;
  localStorage.setItem('email', mail);
}

function onTextareaInput(ev) {
  const message = ev.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}*/

function onFormSubmit(ev) {
  ev.preventDefault();
  ev.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(ev) {
  formData[ev.target.name] = ev.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

/*function onOutput() {
  /*const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    form.input.value = savedData;
  }*/
if (localStorage.getItem(STORAGE_KEY)) {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  for (let key in formData) {
    form.elements[key].value = formData[key];
  }
}
