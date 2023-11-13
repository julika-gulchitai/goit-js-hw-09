// Напиши скрипт, який після натискання кнопки «Start», 
// раз на секунду змінює колір фону < body > на випадкове значення,
// використовуючи інлайн стиль.Натисканням на кнопку «Stop» зміна кольору 
// фону повинна зупинятися.

const body = document.querySelector('body')
const startBtn = body.querySelector('[data-start]');
const stoptBtn = body.querySelector('[data-stop]');

startBtn.addEventListener('click', () => timerId = setInterval(() => { body.style.backgroundColor = getRandomHexColor() }, 1000));
stoptBtn.addEventListener('click', () => clearInterval(timerId));
let timerId = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

