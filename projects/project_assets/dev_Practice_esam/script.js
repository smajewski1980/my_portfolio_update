const toursGalleryPicsMed = [
  "./assets/toursGallery/image_1_med.webp",
  "./assets/toursGallery/image_2_med.webp",
  "./assets/toursGallery/image_3_med.webp",
  "./assets/toursGallery/image_4_med.webp",
  "./assets/toursGallery/image_5_med.webp",
  "./assets/toursGallery/image_6_med.webp",
  "./assets/toursGallery/image_7_med.webp",
  "./assets/toursGallery/image_8_med.webp",
];

const mediumGalleryPic = document.querySelector(
  ".tours-gallery-image-wrapper img"
);
let toursGalleryIndex = 0;

function advanceMediumGalleryPic() {
  mediumGalleryPic.src = toursGalleryPicsMed[toursGalleryIndex];
  toursGalleryIndex++;
  if (toursGalleryIndex === toursGalleryPicsMed.length) {
    toursGalleryIndex = 0;
  }
}

window.onload = () => {
  advanceMediumGalleryPic();
  setInterval(advanceMediumGalleryPic, 4000);
  mediumGalleryPic.addEventListener("click", imageModal);
};
// End tours Gallery med pic slideshow

//        here is code for a gallery modal when you click on the med pic
const toursGalleryPicsLarge = [
  "./assets/toursGallery/image_1_full.webp",
  "./assets/toursGallery/image_2_full.webp",
  "./assets/toursGallery/image_3_full.webp",
  "./assets/toursGallery/image_4_full.webp",
  "./assets/toursGallery/image_5_full.webp",
  "./assets/toursGallery/image_6_full.webp",
  "./assets/toursGallery/image_7_full.webp",
  "./assets/toursGallery/image_8_full.webp",
];
const toursGalleryModal = document.querySelector(".tours-gallery-modal");
const toursGalleryModalImg = document.querySelector(".tours-gallery-modal img");

let clickedImgIdx;

function imageModal(e) {
  // to make the left/right arrows change the modal full size pic
  const galleryLeftArrow = document.querySelector(".gallery-left-arr");
  const galleryRightArrow = document.querySelector(".gallery-right-arr");

  function galleryImageBack() {
    if (clickedImgIdx === 0) {
      clickedImgIdx = toursGalleryPicsLarge.length - 1;
      modalThumbIndex = modalThumbs.length - 1;
    } else {
      clickedImgIdx--;
      modalThumbIndex--;
    }
    toursGalleryModalImg.src = toursGalleryPicsLarge[clickedImgIdx];
  }

  function galleryImageForward() {
    if (clickedImgIdx === toursGalleryPicsLarge.length - 1) {
      clickedImgIdx = 0;
      modalThumbIndex = 0;
    } else {
      clickedImgIdx++;
      modalThumbIndex++;
    }
    toursGalleryModalImg.src = toursGalleryPicsLarge[clickedImgIdx];
  }

  function handleGalleryLeftArrow() {
    galleryImageBack();
    clearActiveModalThumb();
    createActiveModalThumb();
  }

  function handleGalleryRightArrow() {
    galleryImageForward();
    clearActiveModalThumb();
    createActiveModalThumb();
  }

  galleryLeftArrow.addEventListener("click", handleGalleryLeftArrow);

  galleryRightArrow.addEventListener("click", handleGalleryRightArrow);
  // END ARROWS

  toursGalleryPicsMed.forEach((pic, idx) => {
    if (pic === e.srcElement.attributes[0].nodeValue) {
      clickedImgIdx = idx;
      modalThumbIndex = idx;
      clearActiveModalThumb();
      createActiveModalThumb();
    } else return;
    toursGalleryModalImg.src = toursGalleryPicsLarge[clickedImgIdx];
    toursGalleryModal.showModal();
  });
  toursGalleryModal.addEventListener("click", (e) => {
    if (e.target.nodeName === "DIALOG") {
      toursGalleryModal.close();
      toursGalleryModalImg.src = "";
      galleryLeftArrow.removeEventListener("click", handleGalleryLeftArrow);
      galleryRightArrow.removeEventListener("click", handleGalleryRightArrow);
    }
  });
}
// END OF MAIN IMAGE MODAL FUNCTION

// makes the modal thumnails active for styling and
// for selecting image

const modalThumbs = document.querySelectorAll(
  ".tours-gallery-modal-thumbs-wrapper img"
);
let modalThumbIndex;
let clickedThumbIdx;

function clearActiveModalThumb() {
  modalThumbs.forEach((thumb) => {
    thumb.removeAttribute("data-active");
  });
}

function createActiveModalThumb() {
  modalThumbs.forEach((thumb, index) => {
    if (modalThumbIndex === index) {
      thumb.setAttribute("data-active", "true");
    }
  });
}

function selectPicFromModalThumb(e) {
  clickedThumbIdx = e.target.dataset.idx;
  clickedImgIdx = clickedThumbIdx;
  modalThumbIndex = clickedThumbIdx;
  toursGalleryModalImg.src = toursGalleryPicsLarge[clickedThumbIdx];
  clearActiveModalThumb();
  e.target.dataset.active = "true";
}

modalThumbs.forEach((thumb, idx) => {
  thumb.addEventListener("click", selectPicFromModalThumb);
  thumb.setAttribute("data-idx", idx);
});

// now to make the carousel/slideshow active

const carouselSlider = document.querySelector(".carousel-slider");
const carouselSliderImgs = carouselSlider.getElementsByTagName("img");

function carouselMove() {
  carouselSlider.classList.add("move-carousel");
  setTimeout(() => {
    let firstSlide = carouselSlider.removeChild(carouselSliderImgs[0]);
    carouselSlider.appendChild(firstSlide);
    carouselSlider.classList.remove("move-carousel");
  }, 3000);
}

const startCarousel = setInterval(carouselMove, 6000);
