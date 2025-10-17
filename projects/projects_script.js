const cards = Array.from(document.getElementsByClassName('card'));
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const descriptions = [
  {
    title: 'The Crazy Unicorn Shoppe',
    desc: 'This is a full stack e-commerce app. It uses a Postgres database and allows users to make an account, have persistant cart data, place an order and more. The Dev Info page contains all the technical details.',
  },
  {
    title: 'The Change Changer',
    desc: 'When I deployed this currency exchange app, to hide my API key I set up a Netlify Function to make the API call. The function acts as a backend endpoint that has access to the environment variables.',
  },
  {
    title: 'New York State Assembly Home Page',
    desc: "What a great page for a portfolio! This page includes an interactive carousel of slides/links and an interactive calendar. It's also responsive and adjusts the layout for small screens.",
  },
  {
    title: 'Assembly Sound Off(the floor)',
    desc: "This was a fun music app I made for a few laughs in the office. In the context of musical timing, this app helped me understand the difference between a 'click' event and a 'mousedown' event.",
  },
  {
    title: 'Empire State Aerosciences Museum',
    desc: 'When I saw this page while preparing for a visit, I thought it would be a fun page to build. It includes a few modals, an image gallery and an image carousel. It also shows the live weather at the museum.',
  },
  {
    title: 'My Music Catalog v2',
    desc: 'This is a React app I built for Codecademy. It does not connect to my database, it just references flat files. I still need to add a search feature, but I already started working on the next version.',
  },
  {
    title: 'Multi-Step Form',
    desc: 'This is a Frontend Mentor project of a multi-step HTML form. The final step of the form uses the collected data from the other steps to produce an order summary and total.',
  },
  {
    title: 'My Trivia App',
    desc: 'Here is a trivia app I made to practice working with fetched API data. The API returns both multiple choice and boolean questions.',
  },
  {
    title: 'Product List With Cart',
    desc: 'A Frontend Mentor project of an interactive product shopping cart, which has a responsive layout and an order confirmation modal.',
  },
  {
    title: 'Bookmark Landing Page',
    desc: 'A Frontend Mentor project. This one includes a section with tabs that switch content and a faq accordion.',
  },
];
const descTitle = document.querySelector('.desc-title');
const desc = document.querySelector('.desc');
const detailsEl = document.querySelector('details');
const summaryEl = document.querySelector('summary');
const infoWrapper = document.querySelector('.info-wrapper');
const cardWrapper = document.querySelector('.card-wrapper');
let currentCard = 1;
let moving = false;

function removeSnapClass() {
  cards.forEach((card) => {
    card.classList.remove('card-snap');
  });
}

function addSnapClass() {
  removeSnapClass();
  cards[currentCard - 1].classList.add('card-snap');
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
    btnNext.classList.remove('inactive-control');
    if (currentCard === 1) {
      btnPrev.classList.add('inactive-control');
    }
    if (detailsEl.open) {
      detailsEl.style.maxHeight = `${detailsEl.scrollHeight}px`;
    }
  }
}
function nextCard() {
  if (currentCard < 10 && !moving) {
    currentCard++;
    moving = true;
    setTimeout(() => {
      moving = false;
    }, 500);
    addSnapClass();
    populateInfoFields();
    btnPrev.classList.remove('inactive-control');
    if (currentCard === 10) {
      btnNext.classList.add('inactive-control');
    }
    if (detailsEl.open) {
      detailsEl.style.maxHeight = `${detailsEl.scrollHeight}px`;
    }
  }
}

function populateInfoFields() {
  descTitle.textContent = descriptions[currentCard - 1].title;
  desc.innerHTML = descriptions[currentCard - 1].desc;
}

btnPrev.addEventListener('click', prevCard);
btnNext.addEventListener('click', nextCard);
populateInfoFields();

detailsEl.addEventListener('toggle', (e) => {
  if (detailsEl.open) {
    cardWrapper.classList.add('card-wrapper-low-opac');
    desc.classList.add('desc-fade-in');
    detailsEl.style.maxHeight = `${detailsEl.scrollHeight}px`;
  } else {
    cardWrapper.classList.remove('card-wrapper-low-opac');
    desc.classList.remove('desc-fade-in');
  }
});

let closeTimeout;

summaryEl.addEventListener('click', (e) => {
  if (detailsEl.open) {
    e.preventDefault();
    desc.classList.remove('desc-fade-in');
    desc.classList.add('desc-fade-out');
    closeTimeout = setTimeout(() => {
      detailsEl.style.maxHeight = '2.5rem';

      setTimeout(() => {
        detailsEl.removeAttribute('open');
        desc.classList.remove('desc-fade-out');
      }, 350);
    }, 350);
  } else {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      desc.classList.remove('desc-fade-out');
    }
  }
});
