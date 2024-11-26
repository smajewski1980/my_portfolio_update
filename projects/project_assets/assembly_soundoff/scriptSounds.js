const soundGavelSingle = new Audio("./sounds/effects/gavelSingle.mp3");
const soundGavelTriple = new Audio("./sounds/effects/gavelTriple.mp3");
const soundVoteBell = new Audio("./sounds/effects/voteBell.mp3");
const penClick = new Audio("./sounds/effects/penClick.mp3");
const clap = new Audio("./sounds/effects/clap.mp3");

const soundEffectButtons = document.querySelectorAll(".btn-sound-effect");

soundEffectButtons.forEach((button) => {
  button.addEventListener("mousedown", playSoundEffect);
});

function playSoundEffect(e) {
  const clickedSoundEffect = e.target.getAttribute("data-sound-effect");

  switch (clickedSoundEffect) {
    case "soundGavelSingle":
      soundGavelSingle.load();
      soundGavelSingle.play();
      break;
    case "soundGavelTriple":
      soundGavelTriple.load();
      soundGavelTriple.play();
      break;
    case "soundVoteBell":
      soundVoteBell.load();
      soundVoteBell.play();
      break;
    case "penClick":
      penClick.load();
      penClick.play();
      break;
    case "clap":
      clap.load();
      clap.play();
      break;
  }
}
