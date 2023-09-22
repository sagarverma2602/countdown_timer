const timerDisplay = document.getElementById('timer');
const timerInput = document.getElementById('timer-input');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');

let countdown;
let timeLeft = 0;

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    const inputValue = parseInt(timerInput.value, 10);
    if (inputValue > 0) {
        timeLeft = inputValue;
        updateTimerDisplay();
        timerInput.disabled = true;
        startButton.disabled = true;
        stopButton.disabled = false;

        countdown = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                stopTimer();
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(countdown);
    timerInput.disabled = false;
    startButton.disabled = false;
    stopButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
