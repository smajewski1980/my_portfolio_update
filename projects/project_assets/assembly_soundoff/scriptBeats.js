const beat1 = new Audio("./sounds/beats/beat1.mp3");
const beat3 = new Audio("./sounds/beats/beat3.mp3");
const beat2 = new Audio("./sounds/beats/beat2.mp3");
const beat4 = new Audio("./sounds/beats/beat4.mp3");
const beat5 = new Audio("./sounds/beats/beat5.mp3");

const beats = [beat1, beat2, beat3, beat4, beat5];

beats.forEach((beat) => {
  beat.loop = true;
  beat.volume = 0.5;
});
beat4.volume = 0.25;
beat5.volume = 0.25;

const beatButtons = document.querySelectorAll(".btn-beat");

let currentlyPlayingBeat;

beatButtons.forEach((button) => {
  button.addEventListener("mousedown", playBeat);
});

function activateIcon(beat) {}
let icon = null;
function playBeat(e) {
  if (icon) {
    icon.classList.remove("beats-button-playing");
  }
  const clickedBeat = e.target.getAttribute("data-beat");
  if (currentlyPlayingBeat) {
    currentlyPlayingBeat.load();
  }

  switch (clickedBeat) {
    case "beat1":
      beat1.play();
      currentlyPlayingBeat = beat1;
      activateIcon(beat1);
      break;
    case "beat2":
      beat2.play();
      currentlyPlayingBeat = beat2;
      activateIcon(beat2);
      break;
    case "beat3":
      beat3.play();
      currentlyPlayingBeat = beat3;
      activateIcon(beat3);
      break;
    case "beat4":
      beat4.play();
      currentlyPlayingBeat = beat4;
      activateIcon(beat4);
      break;
    case "beat5":
      beat5.play();
      currentlyPlayingBeat = beat5;
      activateIcon(beat5);
      break;
  }

  icon = document.querySelector(`[data-beat=${this.dataset.beat}] i`);
  icon.classList.add("beats-button-playing");
}
