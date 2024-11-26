const dialogElem = document.querySelector("dialog");
const okButton = document.querySelector(".btn-ok");

if (sessionStorage.getItem("isNewSession") === null) {
  dialogElem.showModal();
  document.body.style.overflow = "hidden";
}

okButton.addEventListener("click", () => {
  dialogElem.close();
  document.body.style.overflow = "visible";
  sessionStorage.setItem("isNewSession", false);
});
