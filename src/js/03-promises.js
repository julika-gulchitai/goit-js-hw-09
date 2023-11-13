const form = document.querySelector('.form');
form.addEventListener('submit', onFormInputData);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = null
  //   new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     if (shouldResolve) {
  //       resolve({ position, delay });
  //     } else {
  //       reject({ position, delay });
  //     }
  //   }, delay);
  // });
  cnsole.log(promise)
  return promise
}

function onFormInputData(event) {
  event.preventDefault();
  let delayInput = Number(event.target.elements.delay.value);
  const stepInput = Number(event.target.elements.step.value);
  const amountInput = Number(event.target.elements.amount.value);

  for (let i = 0; i < amountInput; i++) {
    const promise = createPromise(i, delayInput)
    console.log(promise)
    promise.then(({ position, delay }) => {
        console.log(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        console.log(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    // На кожній єтерації додаємо - щоб наступний виклик проміса відбувся за новою затримакою "Delay step"
    delayInput += stepInput;
  }
}


// function createPromise(position, delay) {
//     const shouldResolve = Math.random() > 0.3;
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
      
//       if (shouldResolve) {
//         resolve({ position, delay })
//       } else {
//         reject({ position, delay })
//       }
//     }, delay)
//   })
// }






function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}


// Напиши скрипт, який на момент сабміту форми викликає функцію 
// createPromise(position, delay) стільки разів, скільки ввели в поле amount.Під час кожного виклику передай 
// їй номер промісу(position), що створюється, і затримку, враховуючи першу затримку(delay), введену користувачем, і крок(step).