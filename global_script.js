const fireLoop3 = new Audio("/assets/sounds/fire_loop_1.mp3");
fireLoop3.loop = true;
fireLoop3.volume = 0.2;

const ltFl4Wrapper = document.querySelector(".fl4-w-1 .lt-fl4-wr");
const ltFlame4 = document.querySelector(".fl4-w-1 .lt-fl4-wr .flame4");
const rtFl4Wrapper = document.querySelector(".fl4-w-1 .rt-fl4-wr");
const rtFlame4 = document.querySelector(".fl4-w-1 .rt-fl4-wr .flame4");
const ltFl4WrapperRear = document.querySelector(".fl4-w-2 .lt-fl4-wr");
const ltFlame4Rear = document.querySelector(".fl4-w-2 .lt-fl4-wr .flame4");
const rtFl4WrapperRear = document.querySelector(".fl4-w-2 .rt-fl4-wr");
const rtFlame4Rear = document.querySelector(".fl4-w-2 .rt-fl4-wr .flame4");

function getInnerWidth() {
  return window.innerWidth;
}

function populateSlides(divElem, slideQty, nameStr, folder) {
  let innerMarkup = `<div class="${nameStr}-spacer"></div>`;
  let path;
  for (let i = 0; i < slideQty; i++) {
    path = `/assets/${folder}/${nameStr}/${i}.png`;
    const image = `<img src="${path}" alt=""/>`;
    innerMarkup += image;
  }
  innerMarkup += `<div class="${nameStr}-spacer"></div>`;
  divElem.innerHTML = innerMarkup;
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function startFl4sStaggered() {
  ltFlame4.style.setProperty(
    "--fl4-anim-timing",
    `${getRandomNumber(1.45, 1.85)}s`
  );
  ltFlame4.classList.add("flame-4-spark");
  ltFlame4Rear.style.setProperty(
    "--fl4-anim-timing",
    `${getRandomNumber(1.45, 1.85)}s`
  );
  ltFlame4Rear.classList.add("flame-4-spark");
  rtFlame4.style.setProperty(
    "--fl4-anim-timing",
    `${getRandomNumber(1.45, 1.85)}s`
  );
  rtFlame4.classList.add("flame-4-spark");
  rtFlame4Rear.style.setProperty(
    "--fl4-anim-timing",
    `${getRandomNumber(1.45, 1.85)}s`
  );
  rtFlame4Rear.classList.add("flame-4-spark");
}

function fadeInFl4s() {
  setTimeout(() => {
    setTimeout(() => {
      fireLoop3.load();
    }, 30000);
    fireLoop3.play();
  }, 3000);
  ltFl4Wrapper.classList.add("front-fade-in");
  rtFl4Wrapper.classList.add("front-fade-in");
  ltFl4WrapperRear.classList.add("rear-fade-in");
  rtFl4WrapperRear.classList.add("rear-fade-in");
}

if (getInnerWidth() > 1200) {
  populateSlides(ltFlame4, 52, "flame4", "flames", true);
  populateSlides(rtFlame4, 52, "flame4", "flames", true);
  populateSlides(ltFlame4Rear, 52, "flame4", "flames", true);
  populateSlides(rtFlame4Rear, 52, "flame4", "flames", true);
  startFl4sStaggered();
  setTimeout(fadeInFl4s, 500);
}
