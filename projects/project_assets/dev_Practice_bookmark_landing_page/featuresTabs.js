const featuresTabs = document.querySelectorAll(
  ".features-content-select-bar p"
);
const tabBorderBottom = document.querySelector(".features-content-select-bar");
const featuresContent = document.querySelectorAll(".features-content");

function toggleFeatures() {
  let clickedTab = this;
  tabBorderBottom.style.setProperty("--border-bottom-width", "0%");
  toggleFeaturesContent(clickedTab.dataset.tab);
  setTimeout(() => {
    featuresTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    clickedTab.classList.add("active");
    setTimeout(() => {
      tabBorderBottom.style.setProperty("--border-bottom-width", "100%");
    }, 50);
  }, 100);
}

function toggleFeaturesContent(selectedContent) {
  featuresContent.forEach((content) => {
    content.classList.remove("selected");
  });
  featuresContent.forEach((content) => {
    if (selectedContent === content.dataset.tab) {
      content.classList.toggle("selected");
    }
  });
}

featuresTabs.forEach((tab) => tab.addEventListener("click", toggleFeatures));
