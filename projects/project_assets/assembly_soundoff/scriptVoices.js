const aubryBillPassed = new Audio("./sounds/voice/aubryBillPassed.mp3");
const aubryRecordVote = new Audio("./sounds/voice/aubryRecordVote.mp3");
const crystalHouseToOrder = new Audio("./sounds/voice/crystalHouseToOrder.mp3");
const crystalMrSpeaker = new Audio("./sounds/voice/crystalMrSpeaker.mp3");
const goodellMrSpeaker = new Audio("./sounds/voice/goodellMrSpeaker.mp3");
const goodellSponsor = new Audio("./sounds/voice/goodellSponsor.mp3");
const palmesanoCongo = new Audio("./sounds/voice/palmesanoCongo.mp3");
const palmesanoBillion = new Audio("./sounds/voice/palmesanoBillionWithAB.mp3");
const heastieSonOfTheBronx = new Audio("./sounds/voice/heastieSonOfBronx.mp3");
const heastieHipHop = new Audio("./sounds/voice/heastieHipHop.mp3");

heastieSonOfTheBronx.volume = 0.8;

const voiceButtons = document.querySelectorAll(".btn-speech-samples");

voiceButtons.forEach((button) => {
  button.addEventListener("mousedown", playVoiceSample, true);
});

function playVoiceSample(e) {
  const clickedVoice = e.target.getAttribute("data-voice");
  switch (clickedVoice) {
    case "aubryBillPassed":
      aubryBillPassed.load();
      aubryBillPassed.play();
      break;
    case "aubryRecordVote":
      aubryRecordVote.load();
      aubryRecordVote.play();
      break;
    case "crystalHouseToOrder":
      crystalHouseToOrder.load();
      crystalHouseToOrder.play();
      break;
    case "crystalMrSpeaker":
      crystalMrSpeaker.load();
      crystalMrSpeaker.play();
      break;
    case "goodellMrSpeaker":
      goodellMrSpeaker.load();
      goodellMrSpeaker.play();
      break;
    case "goodellSponsor":
      goodellSponsor.load();
      goodellSponsor.play();
      break;
    case "palmesanoCongo":
      palmesanoCongo.load();
      palmesanoCongo.play();
      break;
    case "palmesanoBillionWithAB":
      palmesanoBillion.load();
      palmesanoBillion.play();
      break;
    case "heastieSonOfTheBronx":
      heastieSonOfTheBronx.load();
      heastieSonOfTheBronx.play();
      break;
    case "heastieHipHop":
      heastieHipHop.load();
      heastieHipHop.play();
      break;
  }
}
