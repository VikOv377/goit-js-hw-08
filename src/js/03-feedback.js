import throttle from 'lodash.throttle';

const form = document.querySelector('form');

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
      console.log({ email: email.value, message: message.value });
      
      event.preventDefault();

        const {
            elements: { email, message },
          } = event.currentTarget;
          
        event.currentTarget.reset();
        
        localStorage.clear();
     }
);

function localStorageData () {
  const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  const email = document.querySelector(LOCALSTORAGE_KEY);
  const message = document.querySelector(LOCALSTORAGE_KEY);
  
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }

};
