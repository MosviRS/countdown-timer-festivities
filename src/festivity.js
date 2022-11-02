import Festivity from "./config/Festivity.json";
const dayInput = document.getElementById("day");
const hourInput = document.getElementById("hour");
const minuteInput = document.getElementById("minute");
const secondInput = document.getElementById("second");

export function getFestivity() {
  const festivities = JSON.parse(JSON.stringify(Festivity)).festivities;
  for (const item of festivities) {
    const restTime = new Date() < new Date(item.start);
    if (restTime) {
      return item;
    }
  }
}
export function setTheme(festivity) {
  const {
    colorFont,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    image,
  } = festivity.theme;
  const styleRoot = document.querySelector(":root");
  const container = document.getElementsByClassName("container")[0];
  const name = document.getElementById("name");
  styleRoot.style.setProperty("--color-font", colorFont);
  styleRoot.style.setProperty("--first-color", firstColor);
  styleRoot.style.setProperty("--second-color", secondColor);
  styleRoot.style.setProperty("--third-color", thirdColor);
  styleRoot.style.setProperty("--fourth-color", fourthColor);
  container.style.backgroundImage = `url(${image})`;
  name.innerText = festivity.name;
}
export function setTimer(festivity) {
  const date1 = new Date();
  const date2 = new Date(festivity.start);
  const totalSeconds = (date2 - date1) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const secods = Math.floor(totalSeconds) % 60;
  dayInput.innerText = days;
  hourInput.innerText = hours;
  minuteInput.innerText = minutes;
  secondInput.innerText = secods;
}
