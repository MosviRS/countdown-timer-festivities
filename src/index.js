import "./assets/css/normalize.css";
import "./assets/css/style.css"

import {getFestivity,setTheme,setTimer} from "./festivity";
const festivity = getFestivity();
export async function printTimer() {
  setTheme(festivity);
  setTimer(festivity);
}
printTimer();
setInterval(setTimer, 1000,festivity);
