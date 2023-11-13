import Notiflix from 'notiflix';
/*
* @param1 {string}: Required, a text in string format.
* @param2 {function | Object}: Optional, a callback function that will be called when the notification element has been clicked. Or, extending the initialize options with the new options for each notification element.
* @param3 {Object}: Optional, extending the initialize options with new the options for each notification element. (If the second parameter has been already used for a callback function.)
*/

// // e.g. Only message
// Notiflix.Notify.success('Sol lucet omnibus');

// Notiflix.Notify.failure('Qui timide rogat docet negare');

// Notiflix.Notify.warning('Memento te hominem esse');

// Notiflix.Notify.info('Cogito ergo sum');

// e.g. Message with a callback
// Notiflix.Notify.success(
//   'Click Me',
//   function cb() {
//     // callback
//   },
// );

// e.g. Message with the new options
// Notiflix.Notify.success(
//   'Click Me',
//   {
//     timeout: 6000,
//   },
// );

// e.g. Message with callback, and the new options
// Notiflix.Notify.success(
//   'Click Me',
//   function cb() {
//     // callback
//   },
//   {
//     timeout: 4000,
//   },
// );

const form = document.querySelector('form');
form.addEventListener('submit', onFormInputData);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position: position, delay: delay });
      } else {
        reject({ position: position, delay: delay });
      }
    }, delay);
  });
  return promise;
}

function onFormInputData(event) {
  event.preventDefault();
  let delayInput = Number(event.target.elements.delay.value);
  const stepInput = Number(event.target.elements.step.value);
  const amountInput = Number(event.target.elements.amount.value);

  for (let i = 0; i < amountInput; i++) {
    const promise = createPromise(i, delayInput)
    promise.then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    // На кожній єтерації додаємо - щоб наступний виклик проміса відбувся за новою затримакою "Delay step"
    delayInput += stepInput;
  }
}

// Напиши скрипт, який на момент сабміту форми викликає функцію 
// createPromise(position, delay) стільки разів, скільки ввели в поле amount.Під час кожного виклику передай 
// їй номер промісу(position), що створюється, і затримку, враховуючи першу затримку(delay), введену користувачем, і крок(step).