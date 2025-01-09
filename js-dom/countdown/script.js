
let remainingTime = 10;
const timerElement = document.getElementById('timer');
const buttonsElement = document.getElementById('buttons');


function updateTimer() {
    timerElement.textContent = remainingTime;

    if (remainingTime <= 0) {
        timerElement.textContent = "0";
        buttonsElement.classList.add('hidden');
        clearInterval(timeInterval);
    }
}
function addTime(seconds) {
    remainingTime += seconds;
    updateTimer();
}
const timeInterval = setInterval(() => {
    remainingTime--;
    updateTimer();
}, 1000);

updateTimer();