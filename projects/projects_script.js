const cards = Array.from(document.getElementsByClassName('card'));
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const descriptions = [
  {
    title: 'The Crazy Unicorn Shoppe',
    desc: 'This is a full stack e-commerce app. It is connected to a database and allows users to make an account, have persistant cart data, place an order and more. The Dev Info page will give you all the technical details.',
  },
  {
    title: 'The Change Changer',
    desc: 'Here is a currency exchange app. When I deployed, in order to hide my API key, I had to set up a Netlify Function, which acts as an endpoint that my app can hit, which then hits the API and also has access to the environment variables.',
  },
  {
    title: 'New York State Assembly Home Page',
    desc: 'What a great page for a portfolio! This one includes a carousel of links and an interactive calendar. It is also responsive.',
  },
  {
    title: 'Assembly Sound Off(the floor)',
    desc: "This was a fun music app I made for a few laughs in the office. This one includes you gettin' down!",
  },
  {
    title: 'Empire State Aerosciences Museum',
    desc: 'I went there and thought this would be a fun page to build. This one includes a few modals and an image gallery. It also shows the live weather at the museum.',
  },
  {
    title: 'My Music Catalog v2',
    desc: 'Built with React.js, it is my current catalog and is a work in progress. This one includes a 10x10 storage unit with all of this music inside.',
  },
  {
    title: 'Multi-Step Form',
    desc: 'A Frontend Mentor project of a multi-step HTML form.',
  },
  {
    title: 'My Trivia App',
    desc: 'A little trivia app I made to practice working with fetched API data.',
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
