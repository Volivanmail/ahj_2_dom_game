import { cleanerHole, activHole, randomHole } from "./funcForGame";

let holeIndex = 1;
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");

function startGame() {
  let timerId = setInterval(() => {
    stop.onclick = () => {
      clearInterval(timerId);
    };
    cleanerHole(holeIndex);
    holeIndex = randomHole(holeIndex);
    activHole(holeIndex);
  }, 1000);
}

start.onclick = () => {
  startGame();
};
