// ================================================
// POPULATES THE RECENT NEWS SECTION
// ================================================
const newsLinksWrapper = document.querySelector(".news-links");

function createCard(linkText, dateAdded, picLink, captionText) {
  let card = document.createElement("div");
  card.classList.add("news-card");
  card.classList.add("focus-dots");
  card.tabIndex = "3";
  card.innerHTML = `
    <a href="#" class="card-link" tabindex='-1'>${linkText}</a>
    <p class="date">${dateAdded}</p>
    <div class="card-image-wrapper">
      <img src="${picLink}" alt="" />
      <p>${captionText}</p>
    </div>
  `;
  return card;
}

cardData.forEach((card) => {
  const link = card.linkText;
  const dateAdded = card.dateAdded;
  const pic = card.picLink;
  const caption = card.captionText;
  const newCard = createCard(link, dateAdded, pic, caption);
  newsLinksWrapper.appendChild(newCard);
});

// =================================================
// COLORS THE EVENTS LEGEND KEYS
// =================================================

const legendColors = [
  "var(--clr-cal-legend-session)",
  "var(--clr-cal-legend-pub-hrg)",
  "var(--clr-cal-legend-comm-mtg)",
  "var(--clr-cal-legend-pr-conf)",
  "var(--clr-cal-legend-leg-dates)",
];

const legendKeys = Array.from(document.getElementsByClassName("color"));

legendKeys.forEach((key, idx) => {
  key.style.background = legendColors[idx];
});

// =================================================
// MAKES THE CALENDAR DYNAMIC
// =================================================

const date = new Date();
const months = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];
const dateSpan = document.querySelector(".date-span");

function renderCalendar() {
  const daysWrapper = document.querySelector(".days-wrapper");
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const lastDate = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const calendarHeaderTextElem = document.querySelector(".month-year");
  let days = "";
  let month = date.getMonth();
  const year = date.getFullYear();
  const calendarHeaderText = months[month] + " " + year;
  calendarHeaderTextElem.textContent = calendarHeaderText;
  dateSpan.textContent = calendarHeaderText + " 10:00am";
  const nextDays = 7 - lastDay - 1;
  const monthlyEventsCardTitle = document.querySelector(".card-two h4");

  monthlyEventsCardTitle.textContent = `Events in ${calendarHeaderText}`;

  for (let i = firstDay; i > 0; i--) {
    days += `<div class='prevMoDay'>${prevLastDay - i + 1}</div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    if (i === date.getDate() && new Date().getMonth() === date.getMonth()) {
      days += `<div class='today'>${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let i = 1; i <= nextDays; i++) {
    days += `<div class='nextMoDay'>${i}</div>`;
    daysWrapper.innerHTML = days;
  }

  if (nextDays === 0) {
    daysWrapper.innerHTML = days;
  }
}

document.querySelector(".prev-month").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});
document.querySelector(".next-month").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});
renderCalendar();
// ========================================================
// THE BACK TO TOP BUTTON
// ========================================================

const scrollDistance = () => window.scrollY;
const upArrow = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  let currentScroll = scrollDistance();
  if (currentScroll > 300) {
    upArrow.style.opacity = "1";
    upArrow.style.pointerEvents = "auto";
  } else {
    upArrow.style.opacity = "0";
    upArrow.style.pointerEvents = "none";
  }
});

// ===================================================
// LINKS CAROUSEL
// ===================================================

const slider = document.querySelector(".carousel-slider");
const slideSrcs = [
  "slide9.png",
  "slide1.png",
  "slide2.png",
  "slide3.png",
  "slide4.png",
  "slide5.png",
  "slide6.png",
  "slide7.png",
  "slide8.png",
];
const slideCounter = document.querySelector(".slide-counter");
let slideNumber = "1";
const slidesQty = slideSrcs.length.toString();
const pauseButton = document.querySelector(".pause-btn");
const playButton = document.querySelector(".play-btn");
const pauseNotification = document.querySelector(".pause-notification");
const prevSlideButton = document.querySelector(".prev-arr");
const nextSlideButton = document.querySelector(".next-arr");
let animate;
let isPaused;

function populateSliderImages() {
  slideSrcs.forEach((slide, index) => {
    const newSlide = document.createElement("img");
    newSlide.src = `./assets/carousel_slides/${slide}`;
    newSlide.alt = slide;
    newSlide.setAttribute("data-index", index + 1);
    newSlide.classList.add("carousel-slide");
    slider.appendChild(newSlide);
    slideCounter.textContent = `${slideNumber} / ${slidesQty}`;
  });
}

function frontSlideToBack() {
  slider.appendChild(slider.children[0]);
}

function backSlideToFront() {
  slider.prepend(slider.children[slideSrcs.length - 1]);
}

function moveSlider() {
  slider.classList.toggle("animate-carousel");
  slideCounter.style.setProperty("--activeSlideWidth", "0");
  setTimeout(() => {
    slideCounter.style.setProperty("--activeSlideWidth", "1");
  }, 1000);
  slider.addEventListener(
    "animationend",
    () => {
      frontSlideToBack();
      slideNumber = slider.children[0].getAttribute("data-index");
      slideCounter.textContent = `${slideNumber} / ${slidesQty}`;
      slider.classList.toggle("animate-carousel");
    },
    { once: true }
  );
}

function handlePauseClick() {
  clearInterval(animate);
  pauseNotification.style.display = "block";
  playButton.addEventListener("click", handlePlayClick, { once: true });
  isPaused = true;
  pauseButton.style.fill = "var(--clr-accent-blue)";
  playButton.style.fill = "var(--clr-primary-blue)";
  pauseButton.classList.toggle("control");
  playButton.classList.toggle("control");
}

function handlePlayClick() {
  moveSlider();
  runAnimate();
  pauseNotification.style.display = "none";
  isPaused = false;
  pauseButton.style.fill = "var(--clr-primary-blue)";
  playButton.style.fill = "var(--clr-accent-blue)";
  pauseButton.classList.toggle("control");
  playButton.classList.toggle("control");
}

function runAnimate() {
  animate = setInterval(moveSlider, 5000);
}

function handlePrevClick() {
  clearInterval(animate);
  backSlideToFront();
  slideNumber = slider.children[0].getAttribute("data-index");
  slideCounter.textContent = `${slideNumber} / ${slidesQty}`;
  if (!isPaused) {
    animate = setInterval(moveSlider, 5000);
  }
}
function handleNextClick() {
  clearInterval(animate);
  frontSlideToBack();
  slideNumber = slider.children[0].getAttribute("data-index");
  slideCounter.textContent = `${slideNumber} / ${slidesQty}`;
  if (!isPaused) {
    animate = setInterval(moveSlider, 5000);
  }
}

pauseButton.addEventListener("click", handlePauseClick);
prevSlideButton.addEventListener("click", handlePrevClick);
nextSlideButton.addEventListener("click", handleNextClick);

populateSliderImages();
runAnimate();

// ===================================================
