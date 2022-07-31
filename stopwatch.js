let mins = 00;
let seconds = 00;
let tens = 00;

const appendMins = document.getElementById("mins");
const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
const buttonStart = document.getElementById("button-start");
const buttonStop = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");
let Interval;

buttonStart.addEventListener("click", () => {
  clearInterval(Interval);
  Interval = setInterval(updateTime, 10);
});

buttonStop.addEventListener("click", () => {
  clearInterval(Interval);
});
buttonReset.addEventListener("click", () => {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  mins = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
  appendMins.innerHTML = mins;
});

function updateTime() {
  tens++;

  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    console.log("seconds");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    mins++;
    appendMins.innerHTML = "0" + mins;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
  }
  if (mins > 9) {
    appendSeconds.innerHTML = mins;
  }
}
