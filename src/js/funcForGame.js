export function cleanerHole(index) {
  const hole = document.querySelector(`#hole${index}`);
  hole.classList.remove("hole_has-mole");
}

export function activHole(index) {
  const hole = document.querySelector(`#hole${index}`);
  hole.classList.add("hole_has-mole");
}

export function randomHole(index) {
  let randomIndex = Math.floor(1 + Math.random() * 15);
  if (index === randomIndex) {
    randomHole(index);
  }
  return randomIndex;
}
