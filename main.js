/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/funcForGame.js
function cleanerHole(index) {
  const hole = document.querySelector(`#hole${index}`);
  hole.classList.remove("hole_has-mole");
}
function activHole(index) {
  const hole = document.querySelector(`#hole${index}`);
  hole.classList.add("hole_has-mole");
}
function randomHole(index) {
  let randomIndex = Math.floor(1 + Math.random() * 16);
  if (index === randomIndex) {
    randomHole(index);
  }
  return randomIndex;
}
;// CONCATENATED MODULE: ./src/js/app.js

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
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;