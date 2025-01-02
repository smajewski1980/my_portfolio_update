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
    title: "Product List With Cart",
    desc: "A Frontend Mentor project of an interactive product shopping cart,</br>which has a responsive layout and an order confirmation modal.",
  },
  {
    title: "My Trivia App",
    desc: "A little trivia app I made to practice working with fetched API data.",
  },
  {
    title: "Bookmark Landing Page",
    desc: "A Frontend Mentor project.</br>This one includes a section with tabs that switch content and a faq accordion.",
  },
];
const descTitle = document.querySelector(".desc-title");
const desc = document.querySelector(".desc");
let currentCard = 1;
let moving = false;

function removeSnapClass() {
  cards.forEach((card) => {
    card.classList.remove("card-snap");
  });
}

function addSnapClass() {
  removeSnapClass();
  cards[currentCard - 1].classList.add("card-snap");
}

function prevCard() {
  if (currentCard > 1 && !moving) {
    currentCard--;
    moving = true;
    setTimeout(() => {
      moving = false;
    }, 500);
    addSnapClass();
    populateInfoFields();
    btnNext.classList.remove("inactive-control");
    if (currentCard === 1) {
      btnPrev.classList.add("inactive-control");
    }
  }
}
function nextCard() {
  if (currentCard < 7 && !moving) {
    currentCard++;
    moving = true;
    setTimeout(() => {
      moving = false;
    }, 500);
    addSnapClass();
    populateInfoFields();
    btnPrev.classList.remove("inactive-control");
    if (currentCard === 7) {
      btnNext.classList.add("inactive-control");
    }
  }
}

function populateInfoFields() {
  descTitle.textContent = descriptions[currentCard - 1].title;
  desc.innerHTML = descriptions[currentCard - 1].desc;
}

btnPrev.addEventListener("click", prevCard);
btnNext.addEventListener("click", nextCard);

populateInfoFields();
