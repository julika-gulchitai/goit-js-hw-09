// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
// npm i notiflix
// Бібліотека очікує, що її ініціалізують на елементі input[type = "text"], тому ми додали до HTML документу поле input#datetime - picker.
// input#datetime-picker
 
const refs = {
  btnStart: document.querySelector('[data-start]'),
  inputDate: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.btnStart.disabled = true; 
let choosedTime = null;
refs.btnStart.addEventListener('click', reverseTimeStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) 
    return Notiflix.Notify.warning("Please choose a date in the future");    
    refs.btnStart.disabled = false;
    choosedTime = selectedDates[0];
  },
};

flatpickr(refs.inputDate, options);

  function getTimeComponents(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
};

function reverseTimeStart() {
     refs.btnStart.disabled = true;
    const intervalId = setInterval(() => {
   const currentTime = Date.now();
   const diff = choosedTime - currentTime;
      const time = convertMs(diff);
  
      if (diff < 0) {
        clearInterval(intervalId);
        return;
      }

      refs.days.textContent = pad(convertMs(diff).days);
      refs.hours.textContent = pad(convertMs(diff).hours);
      refs.minutes.textContent = pad(convertMs(diff).minutes);
      refs.seconds.textContent = pad(convertMs(diff).seconds);
    }, 1000);
};

  function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function pad(value) {
    return String(value).padStart(2, '0');
  }

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

