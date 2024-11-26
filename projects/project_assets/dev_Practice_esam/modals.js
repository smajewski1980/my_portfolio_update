const srvModalLink = document.querySelector("#srv-modal-link");
const footerSrvModalLink = document.querySelector(
  "#footer-main-srv-modal-link"
);
const srvModal = document.querySelector(".srv-modal-wrapper");
const srvModalClose = document.querySelector(".close-icon");
const contactModalLink = document.querySelector("#contact-modal-link");
const contactModal = document.querySelector(".contact-modal-wrapper");
const contactModalCloseIcon = document.querySelector(".contact-close-icon");

function openModal(modal) {
  modal.showModal();
}

function closeModal(modal) {
  modal.close();
}

srvModalLink.addEventListener("click", () => openModal(srvModal));

footerSrvModalLink.addEventListener("click", () => openModal(srvModal));

srvModalClose.addEventListener("click", () => closeModal(srvModal));

srvModal.addEventListener("click", (e) => {
  if (e.target.nodeName === "DIALOG") {
    closeModal(srvModal);
  }
});

contactModalLink.addEventListener("click", () => openModal(contactModal));

contactModalCloseIcon.addEventListener("click", () => closeModal(contactModal));

contactModal.addEventListener("click", (e) => {
  if (e.target.nodeName === "DIALOG") {
    closeModal(contactModal);
  }
});
