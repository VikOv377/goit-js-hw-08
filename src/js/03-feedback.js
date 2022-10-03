import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener
(
    'input', 
    throttle(event => {
        const dataToSave = { email: email.value, message: message.value }
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataToSave));
    }, 500)

);

form.addEventListener
(
    'submit',
     event => {
        event.preventDefault();

        const {
            elements: { email, message },
          } = event.currentTarget;
          
        console.log({ email: email.value, message: message.value });
        
        event.currentTarget.reset();
        
        localStorage.remove(LOCALSTORAGE_KEY);
     }
);

const storageData = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedStorage = JSON.parse(storageData);

const fillUpForm = () => {
    if (parsedStorage !== null) {
      input.value = parseStorage.email;
      textarea.value = parseStorage.message;
    }
  };

fillUpForm();
