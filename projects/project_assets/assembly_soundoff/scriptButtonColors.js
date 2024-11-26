const colors = [
  "rgb(255, 209, 0)",
  "blanchedalmond",
  "deeppink",
  "lime",
  "aqua",
];

const voiceButtonPairs = [
  [voiceButtons[0], voiceButtons[5]],
  [voiceButtons[1], voiceButtons[6]],
  [voiceButtons[2], voiceButtons[7]],
  [voiceButtons[3], voiceButtons[8]],
  [voiceButtons[4], voiceButtons[9]],
];

function getRandomNumber(array) {
  let number = Math.floor(Math.random() * array.length);
  return number;
}

let usedVoiceColors = [];
let usedSoundEffectColors = [];

function getColor(array, used) {
  let color = colors[getRandomNumber(array)];
  while (used.includes(color)) {
    color = colors[getRandomNumber(array)];
  }
  return color;
}

voiceButtonPairs.forEach((pair) => {
  let color = getColor(colors, usedVoiceColors);
  usedVoiceColors.push(color);

  pair.forEach((item) => {
    item.style.background = color;
  });
});

soundEffectButtons.forEach((button) => {
  // let color = getColor(soundEffectButtons, usedSoundEffectColors);
  // usedSoundEffectColors.push(color);
  let color = "lightsalmon";

  button.style.background = color;
});

beatButtons.forEach((button) => {
  button.style.background = "rgb(147,197,114)";
});
