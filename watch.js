// Digital Clock

const time = document.getElementById("time");
const date = document.getElementById("date");

setInterval(update, 1000);

function update() {
  let now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  let timeString = `${hours}:${minutes}:${seconds}`;
  time.innerHTML = changeNumbers(timeString);

  let weekDay = now.toLocaleDateString("fa-IR", { weekday: "long" });
  let monthDay = now.toLocaleDateString("fa-IR", { day: "numeric" });
  let year = now.toLocaleDateString("fa-IR", { year: "numeric" });
  let monthName = now.toLocaleDateString("fa-IR", { month: "long" });

  let dateSring = `${weekDay}، ${monthDay} ${monthName} ${year}`;
  date.innerHTML = dateSring;
}

function changeNumbers(input) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  let output = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] >= 0 && input[i] <= 9) {
      output += farsiDigits[input[i]];
    } else {
      output += input[i];
    }
  }
  return output;
}
