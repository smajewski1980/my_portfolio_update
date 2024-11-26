const fireLoop1 = new Audio("/assets/sounds/fire_loop_1.mp3");
fireLoop1.loop = true;
fireLoop1.volume = 0.5;
const fireLoop2 = new Audio("/assets/sounds/fire_loop_1.mp3");
fireLoop2.loop = true;
fireLoop2.volume = 0.3;
const fireLoop3 = new Audio("/assets/sounds/fire_loop_1.mp3");
fireLoop3.loop = true;
fireLoop3.volume = 0.2;
const boing1 = new Audio("./assets/sounds/boing_1.mp3");
boing1.volume = 0.6;
const springboard = new Audio("./assets/sounds/springboard.mp3");
springboard.volume = 0.4;
const finalReveal = new Audio("./assets/sounds/final_reveal.mp3");
finalReveal.volume = 0.2;
const sparkFar = new Audio("./assets/sounds/tiny_mortar_1.mp3");
const sparkCloser = new Audio("./assets/sounds/tiny_mortar_2.mp3");
sparkCloser.volume = 0.1;
const sparkClose = new Audio("./assets/sounds/tiny_mortar_2.mp3");
sparkClose.volume = 0.2;
const fireWhoosh = new Audio("./assets/sounds/fire_whoosh.mp3");
const floorSpark = new Audio("./assets/sounds/floor_spark.mp3");
floorSpark.volume = 0.1;
const floorFlame = new Audio("./assets/sounds/floor_flame.mp3");
floorFlame.volume = 0.1;
const fireworkWhistle = new Audio("./assets/sounds/firework_whistle.mp3");
fireworkWhistle.volume = 0.2;
const thickSlime = new Audio("./assets/sounds/thick_slime.mp3");
thickSlime.volume = 0.1;
const churchBell1 = new Audio("./assets/sounds/church_bell_1.mp3");
churchBell1.volume = 0.2;
const churchBell2 = new Audio("./assets/sounds/church_bell_2.mp3");
churchBell2.volume = 0.3;
const bell3 = new Audio("./assets/sounds/bell_can_i_help_you.mp3");
bell3.volume = 0.3;
const btnEnter = document.querySelector(".btn-enter");
const btnSkipAnim = document.querySelector(".btn-skip-anim");
const animWrapper = document.querySelector(".animation-wrapper");
const textReveal_1 = document.querySelector(".text-reveal-1");
const textReveal_2 = document.querySelector(".text-reveal-2");
const textReveal_3 = document.querySelector(".text-reveal-3");
const navListItems = document.querySelectorAll("nav li");
const nav = document.querySelector("nav");
const headingWrapper = document.querySelector(".heading-wrapper");
const tempBg = document.querySelector(".temp-bg");
const navExplosion = document.querySelector(".nav-explosion");
const flame2_1 = document.querySelector(".fl-2-1 .flame2");
const flame2_2 = document.querySelector(".fl-2-2 .flame2");
const flame2_3 = document.querySelector(".fl-2-3 .flame2");
const flame3_1 = document.querySelector(".fl-3-1 .flame3");
const flame3_2 = document.querySelector(".fl-3-2 .flame3");
const flame3_3 = document.querySelector(".fl-3-3 .flame3");
const flame3_4 = document.querySelector(".fl-3-4 .flame3");
const flame3_5 = document.querySelector(".fl-3-5 .flame3");
const flame3_6 = document.querySelector(".fl-3-6 .flame3");
const flame3Arr = [flame3_1, flame3_2, flame3_3, flame3_4, flame3_5, flame3_6];
const flame5_1 = document.querySelector(".fl-5-1 .flame5");
const flame5_2 = document.querySelector(".fl-5-2 .flame5");
const flame5_3 = document.querySelector(".fl-5-3 .flame5");
const flame6_1 = document.querySelector(".fl-6-1 .flame6");
const flame6_1W = document.querySelector(".fl-6-1");
const flame6_1W_X = document.querySelector(".fl-6-1-x-wrapper");
const flame6_2 = document.querySelector(".fl-6-2 .flame6");
const flame6_2W = document.querySelector(".fl-6-2");
const flame6_2W_X = document.querySelector(".fl-6-2-x-wrapper");
const flame6_3 = document.querySelector(".fl-6-3 .flame6");
const flame6_3W = document.querySelector(".fl-6-3");
const flame6_3W_X = document.querySelector(".fl-6-3-x-wrapper");
const flame6_4 = document.querySelector(".fl-6-4 .flame6");
const flame6_4W = document.querySelector(".fl-6-4");
const flame6_4W_X = document.querySelector(".fl-6-4-x-wrapper");
const flame6_5 = document.querySelector(".fl-6-5 .flame6");
const flame6_5W = document.querySelector(".fl-6-5");
const flame6_5W_X = document.querySelector(".fl-6-5-x-wrapper");
const flame6_6 = document.querySelector(".fl-6-6 .flame6");
const flame6_6W = document.querySelector(".fl-6-6");
const flame6_6W_X = document.querySelector(".fl-6-6-x-wrapper");
const flame6_1_rnd2W = document.querySelector(".fl-6-1-rnd2");
const flame6_1_rnd2 = document.querySelector(".fl-6-1-rnd2 .flame6");
const flame6_2_rnd2W = document.querySelector(".fl-6-2-rnd2");
const flame6_2_rnd2 = document.querySelector(".fl-6-2-rnd2 .flame6");
const flame6_3_rnd2W = document.querySelector(".fl-6-3-rnd2");
const flame6_3_rnd2 = document.querySelector(".fl-6-3-rnd2 .flame6");
const flame8_1 = document.querySelector(".fl-8-1 .flame8");
const flame8_2 = document.querySelector(".fl-8-2 .flame8");
const flame8_3 = document.querySelector(".fl-8-3 .flame8");
const smokePuffWrapper = document.querySelector(".smoke-puff-wrapper");
const smokePuff = document.querySelector(".smoke-puff");
const smokePuff2 = document.querySelector(".smoke-puff-2");

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
