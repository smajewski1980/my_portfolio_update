const cards = Array.from(document.getElementsByClassName("card"));
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const descriptions = [
  {
    title: "New York State Assembly Home Page",
    desc: "What a great page for a portfolio!</br>This one includes a carousel of links and an interactive calendar.</br>It is also responsive.",
  },
  {
    title: "Assembly Sound Off(the floor)",
    desc: "This was a fun music app I made for a few laughs in the office.</br>This one includes you gettin' down!",
  },
  {
    title: "Empire State Aerosciences Museum",
    desc: "I went there and thought this would be a fun page to build.</br>This one includes a few modals and an image gallery.</br>It also shows the live weather at the museum.",
  },
  {
    title: "My Music Catalog v2",
    desc: "Built with React.js, it is my current catalog and is a work in progress.</br>This one includes a 10x10 storage unit with all of this music inside.",
  },
  {
    title: "Cleaning Shellac 78s",
    desc: "A Codecademy project that will remain online as a collector's resource.",
  },
  {
    title: "My Music Catalog v1",
    desc: "Version one was made before I knew any Javascript.</br>I exported PDFs from my database and embedded them in iframes.",
  },
  {
    title: "Bookmark Landing Page",
    desc: "A Frontend Mentor project.</br>This one includes a section with tabs that switch content and a faq accordion.",
  },
];
let currentCard = 1;

function removeSnapClass() {
  cards.forEach((card, index) => {
    card.classList.remove("card-snap");
  });
}

function addSnapClass(card) {
  removeSnapClass();
  cards[currentCard - 1].classList.add("card-snap");
}

function prevCard() {
  if (currentCard > 1) {
    currentCard--;
    addSnapClass();
  }
}
function nextCard() {
  if (currentCard < 7) {
    currentCard++;
    addSnapClass();
  }
}

btnPrev.addEventListener("click", prevCard);
btnNext.addEventListener("click", nextCard);
