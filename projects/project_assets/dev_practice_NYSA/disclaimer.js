const dialogElem = document.querySelector("dialog");
const okButton = document.querySelector(".btn-ok");

if (sessionStorage.getItem("isNewSession") === null) {
  dialogElem.showModal();
}

okButton.addEventListener("click", () => {
  dialogElem.close();
  sessionStorage.setItem("isNewSession", false);
});
